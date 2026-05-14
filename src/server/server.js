import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import http from 'http';
import express from 'express';
import { Client } from '@notionhq/client';
import cors from 'cors';
import bodyParser from 'body-parser';
import moment from 'moment';
import {
  getSimilarQuestions,
  addQuestionToIndex,
  classifyToxicityInput,
} from './ml_models.js';

dotenv.config();

const jsonParser = bodyParser.json();
const app = express();

app.use(cors());

const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });

const qaForumNotion = new Client({
  auth: process.env.REACT_APP_QA_FORUM_NOTION_API_KEY,
});

// generic properties getters
const getSelectName = (prop) => {
  if (!prop) return null;
  // select or multi select
  if (prop.select && prop.select.name) return prop.select.name;
  if (prop.multi_select && prop.multi_select.length) {
    return prop.multi_select[0].name;
  }
  return null;
};

const getRichText = (prop) => {
  if (!prop) return '';
  // rich_text or title
  if (prop.rich_text && prop.rich_text.length) {
    return prop.rich_text
      .map((r) => r.plain_text || (r.text && r.text.content) || '')
      .join('');
  }
  if (prop.title && prop.title.length) {
    return prop.title
      .map((t) => t.plain_text || (t.text && t.text.content) || '')
      .join('');
  }
  return '';
};

const getCheckbox = (prop) => {
  if (prop && typeof prop.checkbox === 'boolean') {
    return prop.checkbox;
  }
  return false;
};

const getDateStart = (prop) => {
  if (prop && prop.date) {
    return prop.date.start;
  }
  return null;
};

const getNumber = (prop) => {
  if (prop && prop.number !== undefined && prop.number !== null) {
    return prop.number;
  }
  return null;
};

const getQuestionAnswered = (prop) => {
  if (prop && prop.checkbox) {
    return prop.checkbox;
  }
  return false;
};

// -- ANONYMOUS Q&A FORUM CODE BELOW --//
async function getQuestionsAndAnswers(databaseId) {
  let allPages = [];
  let startCursor;

  while (true) {
    const resp = await qaForumNotion.databases.query({
      database_id: databaseId,
      // sorting the questions from newest to oldest
      ...(startCursor ? { start_cursor: startCursor } : {}),
    });
    allPages = allPages.concat(resp.results || []);
    if (resp.has_more) {
      startCursor = resp.next_cursor;
    } else {
      break;
    }
  }

  const questions = [];
  const answers = {};

  allPages.forEach((page) => {
    const props = page.properties || {};
    const type = getSelectName(props.Type);
    const qid = getNumber(props.QuestionID);
    const content = getRichText(props.Content) || '';
    const timestamp = getDateStart(props.Timestamp) || null;
    const answered = getQuestionAnswered(props.Answered);
    const lastEditedTime = page.last_edited_time;
    const createdTime = page.created_time;

    // populate questions list
    if (type === 'Question') {
      questions.push({
        QuestionID: qid,
        Content: content,
        Answers: [],
        Answered: answered,
        Timestamp: timestamp,
        LastEditedTime: lastEditedTime,
        CreatedTime: createdTime,
        _notionPageId: page.id,
      });
      // populate answers map
    } else if (type === 'Answer' && qid) {
      const aid = getNumber(props.AnswerID);
      const netid = getRichText(props.NetID) || '';
      const authenticated = getCheckbox(props.Authenticated);
      const ansObj = {
        AnswerID: aid,
        Content: content,
        NetID: netid,
        Authenticated: authenticated,
        Timestamp: timestamp,
        LastEditedTime: lastEditedTime,
        CreatedTime: createdTime,
        _notionPageId: page.id,
      };
      answers[qid] = answers[qid] || [];
      answers[qid].push(ansObj);
    }
  });

  // attach answers to each questions at end
  return questions
    .map((q) => ({
      ...q,
      Answers: (answers[q.QuestionID] || []).sort(
        (a, b) => new Date(a.CreatedTime) - new Date(b.CreatedTime),
      ),
    }))
    .sort((a, b) => new Date(b.LastEditedTime) - new Date(a.LastEditedTime));
}

// get questions and answers endpt
app.get('/qas', async (req, res) => {
  try {
    const dbId = process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID;
    if (!dbId) {
      return res.status(500).json({ error: 'Notion DB ID not configured' });
    }
    const qa = await getQuestionsAndAnswers(dbId);
    return res.json(qa);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch QAs' });
  }
});

app.get('/get-similar-questions', jsonParser, async (req, res) => {
  try {
    const { question } = req.query;
    const neighbors = await getSimilarQuestions(question);
    res.json(neighbors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch similar questions' });
  }
});

// q&a post functions
app.post('/post-question', jsonParser, async (req, res) => {
  try {
    const { question, timestamp } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Missing required content field' });
    }

    // checking toxicity
    const result = await classifyToxicityInput(question);
    if (result[0].label === 'toxic') {
      return res
        .status(403)
        .json({ error: 'Question rejected due to toxic language' });
    }
    const generateQuestionID = () => {
      const ts = Math.floor(Date.now() / 100000); // timestamp seconds/100 to reduce length
      const randomnum = Math.floor(10 + Math.random() * 90); // 2 digit random number
      return Number(`${ts}${randomnum}`);
    };

    const questionID = generateQuestionID();
    await addQuestionToIndex(question, questionID);
    // gets question content & ids
    const response = await qaForumNotion.pages.create({
      parent: {
        database_id: process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID,
      },
      properties: {
        Type: {
          select: { name: 'Question' },
        },
        Content: {
          title: [{ text: { content: question } }],
        },
        QuestionID: {
          number: questionID,
        },
        AnswerID: {
          number: 0, // 0 for questions, will be updated for answers
        },
        Authenticated: {
          checkbox: false, // questions are not authenticated
        },
        Answered: {
          checkbox: false, // questions are not authenticated
        },
        Timestamp: {
          date: {
            start: timestamp || new Date().toISOString(),
          },
        },
      },
    });
    return res.status(200).json({
      message: 'Question posted successfully',
      notionId: response.id,
      questionID,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Failed to post question', details: error.message });
  }
});

async function getAnswersForQuestion(questionId) {
  let allPages = [];
  let startCursor;
  while (true) {
    const resp = await qaForumNotion.databases.query({
      database_id: process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID,
      filter: {
        and: [
          { property: 'Type', select: { equals: 'Answer' } },
          { property: 'QuestionID', number: { equals: questionId } },
        ],
      },
      ...(startCursor ? { start_cursor: startCursor } : {}),
    });
    allPages = allPages.concat(resp.results || []);
    if (resp.has_more) {
      startCursor = resp.next_cursor;
    } else {
      break;
    }
  }

  return allPages.map((page) => getRichText(page.properties.Content));
}

app.get('/check-duplicate-answer', jsonParser, async (req, res) => {
  try {
    const { questionID, content } = req.query;

    if (!questionID || !content) {
      return res.status(400).json({ error: 'Missing questionID or content' });
    }

    const existingAnswers = await getAnswersForQuestion(Number(questionID));
    const normalized = content.trim().toLowerCase();
    const isDuplicate = existingAnswers.some(
      (ans) => ans.trim().toLowerCase() === normalized,
    );

    return res.json({ isDuplicate });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to check duplicate' });
  }
});

app.post('/check-toxicity', jsonParser, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Missing content' });
    }

    const result = await classifyToxicityInput(content);
    return res.json({ isToxic: result[0].label === 'toxic' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to check toxicity' });
  }
});

app.post('/post-answer', jsonParser, async (req, res) => {
  try {
    const { content, netid, questionID, authenticated, timestamp, token } =
      req.body;

    if (!content || !questionID) {
      return res
        .status(400)
        .json({ error: 'Missing required fields: content or questionID' });
    }

    // verify the token from points backend before saving answer
    if (!token) {
      return res
        .status(401)
        .json({ error: 'Authentication required to post an answer' });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res
        .status(401)
        .json({ error: 'Invalid or expired authentication token' });
    }

    const toxicityResult = await classifyToxicityInput(content);
    if (toxicityResult[0].label === 'toxic') {
      return res.status(403).json({
        error: 'Answer rejected due to toxic or inappropriate language.',
      });
    }

    const existingAnswers = await getAnswersForQuestion(questionID);
    const normalized = content.trim().toLowerCase();
    const isDuplicate = existingAnswers.some(
      (ans) => ans.trim().toLowerCase() === normalized,
    );
    if (isDuplicate) {
      return res.status(409).json({
        error: 'This answer has already been posted for this question.',
      });
    }

    const generateAnswerID = () => {
      const ts = Math.floor(Date.now() / 1000);
      const randomnum = Math.floor(10000 + Math.random() * 90000);
      return Number(`${ts}${randomnum}`);
    };

    const answerID = generateAnswerID();

    const response = await qaForumNotion.pages.create({
      parent: {
        database_id: process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID,
      },
      properties: {
        Type: {
          select: { name: 'Answer' },
        },
        Content: {
          title: [{ text: { content } }],
        },
        NetID: {
          rich_text: [{ text: { content: netid || '' } }],
        },
        QuestionID: {
          number: questionID,
        },
        AnswerID: {
          number: answerID,
        },
        Authenticated: {
          checkbox: !!authenticated,
        },
        Timestamp: {
          date: {
            start: timestamp || new Date().toISOString(),
          },
        },
      },
    });

    return res.status(200).json({
      message: 'Answer posted successfully',
      notionId: response.id,
      answerID,
      content,
      questionID,
      netid,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to post answer' });
  }
});

app.patch('/update-question-answered/:id', jsonParser, async (req, res) => {
  const questionId = parseInt(req.params.id, 10);

  const response = await qaForumNotion.databases.query({
    database_id: process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'QuestionID',
          number: {
            equals: questionId,
          },
        },
        {
          property: 'AnswerID',
          number: {
            equals: 0,
          },
        },
      ],
    },
  });

  if (response === null) {
    return res.status(404).send('Question not found');
  }

  const pageId = response.results[0].id;

  await qaForumNotion.pages.update({
    page_id: pageId,
    properties: {
      Answered: {
        checkbox: true,
      },
    },
  });

  return res.status(200).json('Updated question to answered.');
});

// -- EXTERNAL OPPS BOARD CODE BELOW --//
const getType = (properties) => properties.Type.multi_select[0].name;

//  returns name/title of opportunity
const getName = (properties) => {
  const name = properties.Name;
  return name ? name.title[0].text.content : '';
};

//  returns time of opportunity
const getTime = (properties) => {
  const time = properties.Time;
  return time.rich_text[0] ? time.rich_text[0].text.content : 'No Time';
};

//  returns expiration date of opportunity
const getExpiration = (properties) => {
  const expires = properties.Expires;
  return expires.date ? expires.date.start : 'No Expiration';
};

//  returns location of opportunity
const getLocation = (properties) => {
  const location = properties.Location;
  return location.rich_text[0]
    ? location.rich_text[0].text.content
    : 'No Location';
};

//  returns description of opportunity (formatting of this might be wonky atm)
const getDescription = (properties) => {
  const description = properties.Description;
  if (description.rich_text[0]) {
    return description.rich_text.map((block) => {
      if (block.type === 'text') {
        return block.text.content;
      }
      return '';
    });
  }
  return 'No Description';
};

//  returns url
const getURL = (properties) => properties.Link.url;

async function filterRecentOpportunities(data) {
  const curr = moment().subtract(1, 'days');
  // Directly return the filtered data without using a block
  return data.filter(
    (page) =>
      page.properties.Expires.date &&
      moment(page.properties.Expires.date.start).isAfter(curr),
  );
}

app.get('/external-opps-api', jsonParser, async (req, res) => {
  const results = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
  });

  const filteredRes = await filterRecentOpportunities(results.results);

  const tempRes = filteredRes.map((item) => ({
    icon: item.icon?.emoji || '💡',
    title: getName(item.properties),
    location: getLocation(item.properties),
    date: item.properties.Expires.date.start,
    time: getTime(item.properties),
    description: getDescription(item.properties),
    link: getURL(item.properties),
    category: getType(item.properties),
    expires: getExpiration(item.properties),
  }));

  res.json(tempRes);
});

// -- GENERIC SERVER SETUP BELOW --//
const PORT = process.env.PORT || 4000; // dev port fallback

if (process.env.NODE_ENV === 'production') {
  // Production: use HTTPS with your Let's Encrypt certs
  const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/main-api.illinoiswcs.org/privkey.pem',
    'utf8',
  );
  const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/main-api.illinoiswcs.org/fullchain.pem',
    'utf8',
  );
  const credentials = { key: privateKey, cert: certificate };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {});

  // redirect all HTTP traffic to HTTPS
  const httpApp = express();
  httpApp.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
  });
  http.createServer(httpApp).listen(80, () => {});
} else {
  // Development: just run HTTP locally
  app.listen(PORT, () => {});
}

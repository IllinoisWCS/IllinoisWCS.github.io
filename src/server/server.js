require('dotenv').config();

const fs = require('fs');
// creates https server with ssl certificate
const https = require('https');
//  creates http server for redirecting to https
const http = require('http');
const express = require('express');

const { Client } = require('@notionhq/client');
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

const moment = require('moment');

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
  if (prop.multi_select && prop.multi_select.length) return prop.multi_select[0].name;
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

const getCheckbox = (prop) =>
  (prop && typeof prop.checkbox === 'boolean' ? prop.checkbox : false);
const getDateStart = (prop) => (prop && prop.date ? prop.date.start : null);

async function getQuestionsAndAnswers(databaseId) {
  let allPages = [];
  let startCursor;

  while (true) {
    const resp = await qaForumNotion.databases.query({
      database_id: databaseId,
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
    const qid = getRichText(props.QuestionID) || '';
    const content = getRichText(props.Content) || '';
    const timestamp = getDateStart(props.Timestamp) || null;

    // populate questions list
    if (type === 'Question') {
      questions.push({
        QuestionID: qid,
        Content: content,
        Answers: [],
        Timestamp: timestamp,
        _notionPageId: page.id,
      });
      // populate answers map
    } else if (type === 'Answer' && qid) {
      const aid = getRichText(props.AnswerID) || '';
      const netid = getRichText(props.NetID) || '';
      const authenticated = getCheckbox(props.Authenticated);
      const ansObj = {
        AnswerID: aid,
        Content: content,
        NetID: netid,
        Authenticated: authenticated,
        Timestamp: timestamp,
        _notionPageId: page.id,
      };
      answers[qid] = answers[qid] || [];
      answers[qid].push(ansObj);
    }
  });

  // attach answers to each questions at end
  questions.forEach((q) => {
    const list = answers[q.QuestionID] || [];
    q.Answers = list;
  });

  return questions;
}

// get questions and answers endpt
app.get('/qas', async (req, res) => {
  try {
    const dbId = process.env.REACT_APP_PRACTICE_NOTION_DATABASE_ID;
    if (!dbId) return res.status(500).json({ error: 'Notion DB ID not configured' });

    const qa = await getQuestionsAndAnswers(dbId);
    return res.json(qa);
  } catch (err) {
    console.error('Error fetching QAs:', JSON.stringify(err, null, 2));
    return res.status(500).json({ error: 'Failed to fetch QAs' });
  }
});

// q&a post functions
app.post('/post-question', jsonParser, async (req, res) => {
  try {
    const { question, netid, timestamp } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Missing required content field' });
    }

    // uses time stamp + random string
    const generateQuestionID = () =>
      `Q-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const questionID = generateQuestionID();

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
          rich_text: [{ text: { content: questionID } }],
        },
        AnswerID: {
          rich_text: [{ text: { content: '' } }], // empty for questions
        },
        Authenticated: {
          checkbox: false, // questions are not authenticated
        },
        Timestamp: {
          date: {
            start: timestamp || new Date().toISOString(),
          },
        },
      },
    });
    res.status(200).json({
      message: 'Question posted successfully',
      notionId: response.id,
      questionID,
    });
  } catch (error) {
    console.error('Error posting question:', error);
    res.status(500).json({ error: 'Failed to post question' });
  }
});

app.post('/post-answer', jsonParser, async (req, res) => {
  try {
    const { content, netid, questionID, authenticated, timestamp } = req.body;

    if (!content || !questionID) {
      return res
        .status(400)
        .json({ error: 'Missing required fields: content or questionID' });
    }

    const generateAnswerID = () =>
      `A-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const answerID = generateAnswerID();

    // gets answer content, ids, and authentication status
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
          rich_text: [{ text: { content: questionID } }],
        },
        AnswerID: {
          rich_text: [{ text: { content: answerID } }],
        },
        Authenticated: {
          checkbox: !!authenticated, // true if user successfully authenticated
        },
        Timestamp: {
          date: {
            start: timestamp || new Date().toISOString(),
          },
        },
      },
    });

    res.status(200).json({
      message: 'Answer posted successfully',
      notionId: response.id,
      answerID,
    });
  } catch (error) {
    console.error('Error posting answer:', error);
    res.status(500).json({ error: 'Failed to post answer' });
  }
});

// // returns category : switch this out when using the actual board!!
const getType = (properties) => properties.Type.multi_select[0].name;
// const getType = (properties) => properties.Type.select.name;

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
      // eslint-disable-next-line implicit-arrow-linebreak
      page.properties.Expires.date && // eslint-disable-line operator-linebreak
      moment(page.properties.Expires.date.start).isAfter(curr),
  );
}

app.get('/external-opps-api', jsonParser, async (req, res) => {
  const results = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
  });

  const filteredRes = await filterRecentOpportunities(results.results);

  const tempRes = filteredRes.map((item) => ({
    icon: item.icon?.emoji || '💡', // eslint-disable-line operator-linebreak
    title: getName(item.properties), // eslint-disable-line operator-linebreak
    location: getLocation(item.properties), // eslint-disable-line operator-linebreak
    date: item.properties.Expires.date.start, // eslint-disable-line operator-linebreak
    time: getTime(item.properties), // eslint-disable-line operator-linebreak
    description:
      // eslint-disable-next-line max-len
      getDescription(item.properties), // eslint-disable-line operator-linebreak
    link: getURL(item.properties), // eslint-disable-line operator-linebreak
    category: getType(item.properties), // eslint-disable-line operator-linebreak
    expires: getExpiration(item.properties), // eslint-disable-line operator-linebreak
  }));

  res.json(tempRes);
});

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
  httpsServer.listen(443, () => {
    console.log('HTTPS server running on port 443');
  });

  // redirect all HTTP traffic to HTTPS
  const httpApp = express();
  httpApp.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
  });
  http.createServer(httpApp).listen(80, () => {
    console.log('HTTP redirect server running on port 80');
  });
} else {
  // Development: just run HTTP locally
  app.listen(PORT, () => {
    console.log(`Dev server running on http://localhost:${PORT}`);
  });
}

// redirects all http requests to http
const httpApp = express();

// httpsServer.listen(443);

http.createServer(httpApp).listen(80);

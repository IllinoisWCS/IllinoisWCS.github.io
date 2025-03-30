require('dotenv').config();

const express = require('express');

const { Client } = require('@notionhq/client');
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

const moment = require('moment');

// "@notionhq/client": "^2.2.15",
// "body-parser": "^1.20.3",
// "cors": "^2.8.5",
// "dotenv": "^16.4.5",
// "express": "^4.21.1",
// "find-config": "^1.0.0"

app.use(cors());
const PORT = 8080;
const HOST = '0.0.0.0';

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});

// returns category
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

app.listen(PORT, HOST, () => {});

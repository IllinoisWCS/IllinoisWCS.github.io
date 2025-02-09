require('dotenv').config();

const express = require('express');

const { Client } = require('@notionhq/client');
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

const moment = require('moment');

const fs = require('fs');

// "@notionhq/client": "^2.2.15",
// "body-parser": "^1.20.3",
// "cors": "^2.8.5",
// "dotenv": "^16.4.5",
// "express": "^4.21.1",
// "find-config": "^1.0.0"

app.use(cors());
const PORT = 5000;
const HOST = 'localhost';

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});

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
    title: item.properties.Name.title[0]?.text?.content || 'No Title', // eslint-disable-line operator-linebreak
    location:
      item.properties.Location.rich_text[0]?.text?.content || 'No Location', // eslint-disable-line operator-linebreak
    date: item.properties.Expires.date.start || 'No Expiry Date', // eslint-disable-line operator-linebreak
    time: item.properties.Time.rich_text[0]?.text?.content || 'No Time', // eslint-disable-line operator-linebreak
    description:
      // eslint-disable-next-line max-len
      item.properties.Description.rich_text[0]?.text?.content || // eslint-disable-line operator-linebreak
      'No Description',
    link: item.properties.Link.url || '', // eslint-disable-line operator-linebreak
    category: item.properties.Type.multi_select[0]?.name || 'No Category', // eslint-disable-line operator-linebreak
  }));

  res.json(tempRes);

  fs.writeFile(
    'src/data/externalOpportunities.json',
    JSON.stringify(tempRes),
    (err) => {
      if (err) {
        console.error(err); // eslint-disable-line no-console
      }
    },
  );
});

app.listen(PORT, HOST, () => {});

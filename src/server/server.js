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
const PORT = 5000;
const HOST = 'localhost';

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});


async function filterRecentOpportunities(data) {
  const curr = moment().subtract(1, 'days');
  const filteredData = data.filter(
    (page) =>
      page.properties.Expires.date &&
      moment(page.properties.Expires.date.start).isAfter(curr),
  );
  return filteredData;
}

app.get('/external-opps-api', jsonParser, async (req, res) => {
  const results = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
  });
  const tempRes = await filterRecentOpportunities(results.results);
  res.json(tempRes);
});

app.listen(PORT, HOST, () => {});

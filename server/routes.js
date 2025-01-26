const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
require('dotenv').config();

const app = express();
const router = express.Router();

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_API_KEY,
});

router.get('/external-opps-api', jsonParser, async (req, res) => {
  results = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
  });

  res.json(results.results);
});

router.post('/filter-type', jsonParser, async (req, res) => {
  // console.log(req.body);
  const { type } = req.body;

  if (!type) {
    return res.status(400).json({ error: 'Type is required' });
  }

  try {
    const results = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Type',
        select: {
          equals: type,
        },
      },
    });

    res.json(results.results);
  } catch (error) {
    console.error('Error fetching data from Notion:', error);
    res.status(500).json({ error: 'Failed to fetch data from Notion' });
  }
});

module.exports = router;
require('dotenv').config();

const express = require('express');

const { Client } = require('@notionhq/client');

const cors = require('cors');

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

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

app.get('/external-opps-api', jsonParser, async (req, res) => {
  const results = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
  });

  res.json(results.results);
});

app.listen(PORT, HOST, () => {});

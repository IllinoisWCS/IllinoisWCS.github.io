const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
require('dotenv').config();

const app = express();

app.use(cors());
const PORT = 5000;
const HOST = 'localhost';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

app.get('/external-opps-api', jsonParser, async (req, res) => {
  results = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  res.json(results.results);
});

app.listen(PORT, HOST, () => {
  console.log('Starting proxy at ' + HOST + ':' + PORT);
});

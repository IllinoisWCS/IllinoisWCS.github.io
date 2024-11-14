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
  auth: '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',
});

app.get('/external-opps-api', jsonParser, async (req, res) => {
  results = await notion.databases.query({
    database_id: '12ce552db9f280f8b892ccbcded321a5',
  });

  res.json(results.results);
});

app.listen(PORT, HOST, () => {
  console.log('Starting proxy at ' + HOST + ':' + PORT);
});

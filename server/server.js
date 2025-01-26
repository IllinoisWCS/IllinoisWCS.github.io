const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
require('dotenv').config();

const router = require('./routes');

const app = express();

app.use(express.json());

const PORT = 5000;
const HOST = 'localhost';

app.use(router);

app.listen(PORT, HOST, () => {
  console.log('Starting proxy at ' + HOST + ':' + PORT);
});

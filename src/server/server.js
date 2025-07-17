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

// https server setup
// reads sssl certificate files issued by let's encrypt
const privateKey = fs.readFileSync(
  '/etc/letsencrypt/live/main-api.illinoiswcs.org/privkey.pem',
  'utf8',
);
const certificate = fs.readFileSync(
  '/etc/letsencrypt/live/main-api.illinoiswcs.org/fullchain.pem',
  'utf8',
);
const credentials = { key: privateKey, cert: certificate };

//  creates https server with express app and ssl credentials
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);

// redirects all http requests to http
const httpApp = express();

httpApp.use((req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});

http.createServer(httpApp).listen(80);

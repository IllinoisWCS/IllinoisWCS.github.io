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

  const filteredRes = await filterRecentOpportunities(results.results)
  
  const tempRes = filteredRes.map(item => {
    return {
      icon: icon = item.icon?.emoji || "💡",
      title: item.properties.Name.title[0]?.text?.content || "No Title",
      location: item.properties.Location.rich_text[0]?.text?.content || "No Location",
      date: item.properties.Expires.date.start || "No Expiry Date",
      time: item.properties.Time.rich_text[0]?.text?.content || "No Time",
      description: item.properties.Description.rich_text[0]?.text?.content || "No Description",
      link: item.properties.Link.url || "",
      category: item.properties.Type.multi_select[0]?.name || "No Category",
    };
  });

  res.json(tempRes);

  fs.writeFile('src/data/externalOpportunities.json', JSON.stringify(tempRes), err => {
    if (err) {
      console.error(err);
    }
  });
});

app.listen(PORT, HOST, () => {});

const express = require('express');
const cors = require('cors');
const https = require("https");

const port = 8080;
const server = express();

server.use(cors());

server.get('/weather', function (req, res) {
  const API_ID ='b9b5c6a68f1c7855568991f170553b0c';
  const selectedCity = (req.query.city);
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},IL&APPID=${API_ID}&units=metric`;
  https.get(uri, apiRes => {
    apiRes.setEncoding("utf8");
    let body = "";
    apiRes.on("data", data => {
      body += data;
    });
    apiRes.on("end", () => {
      body = JSON.parse(body);
      const weather = body.main.temp;
      const weatherIcon = body.weather[0].icon;
      console.log(weather,weatherIcon);
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify({weather,weatherIcon }));
    });
  });
});


console.log(`listening on ${port}`);
server.listen(port);

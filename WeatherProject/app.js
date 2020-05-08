const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // console.log(req.body.cityName);

  const query = req.body.cityName;
  const appId = "938304125c062338994b511fc20828b9";
  const units = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appId +
    "&units=" +
    units;
  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const image = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + image + "@2x.png";

      res.write(
        "<h1>The tempureature in " +
          query +
          " is " +
          temp +
          " degrees Celcius.</h1>"
      );
      res.write("<p>The weather is currently " + description + "</p>");
      res.write('<img src="' + imageURL + '">');
      res.send();
    });
  });
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

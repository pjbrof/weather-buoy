const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const fs = require("fs");
const util = require("util");

app.get("/", (req, res) => res.send("Hello World!"));

app.use(express.static("data"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt
//BHBM3

// Line 1 - Headers
// Line 2 - Units
function parseBuoyData(data) {
  var result = [];
  var lines = data.split("\n");

  lines.forEach(function(line) {
    result.push(
      line
        .replace(/\s{2,}/g, " ")
        .replace("#", "")
        .split(" ")
    );
  });

  var headerMap = result[0];
  var unitMap = result[1];

  var jsonResults = [];

  result.forEach(function(buoy) {
    var tempObj = {};
    headerMap.forEach(function(key, index) {
      tempObj[key] = buoy[index];
    });
    jsonResults.push(tempObj);
  });

  return JSON.stringify(jsonResults);
}

function callback() {
  console.log("It worked!");
}

axios
  .get(`http://localhost:${port}/example.txt`)
  .then(function(response) {
    fs.writeFile(
      "data/buoy.json",
      parseBuoyData(response.data.toString()),
      "utf8",
      callback
    );
  })
  .catch(function(err) {
    console.log("There was an error with the request: ", err);
  });

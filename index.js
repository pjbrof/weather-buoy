const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const fs = require("fs");

app.get("/", (req, res) => res.send("Hello World!"));

app.use(express.static("data"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


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

const dataURL = 'https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt';
const oneDay = 1000 * 60 * 60 * 24;

setTimeout(function () {
  axios
  .get(dataURL)
  .then(function(response) {
    fs.writeFile(
      "data/buoy.json",
      parseBuoyData(response.data.toString()),
      (err) => {
        if (err) throw new Error(err);
        console.log('File written successfully');
      }
    );
  })
  .catch(function(err) {
    console.log("There was an error with the request: ", err);
  });  
}, 10000);


const axios = require("axios");

// export default async function handler(request, response) {
//   try {
//     const data = await getBuoyData();
//     return response.status(200).json({ data });
//   } catch (e) {
//     return response.status(400);
//   }
// }

// Line 1 - Headers
// Line 2 - Units
function parseBuoyData(data) {
  var result = [];
  var lines = data.split("\n");

  lines.forEach(function (line) {
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

  result.forEach(function (buoy) {
    var tempObj = {};
    headerMap.forEach(function (key, index) {
      tempObj[key] = buoy[index];
    });
    jsonResults.push(tempObj);
  });

  return jsonResults;
}

async function getBuoyData() {
  return await axios
    .get("https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt")
    .then(function (response) {
      return parseBuoyData(response.data.toString());
    })
    .catch(function (err) {
      console.log("There was an error with the request: ", err);
    });
}

// module.exports = {
//   getBuoyData,
// };

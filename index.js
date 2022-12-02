const express = require("express");
const app = express();
const port = 3000;
// const buoy = require("./api/buoy");
const fs = require("fs");
const gm = require("gm").subClass({ imageMagick: "7+" });
// const jpeg = require("jpeg-js");
// require("@tensorflow/tfjs-node");
// const mobilenet = require("@tensorflow-models/mobilenet");

app.get("/api/buoy/photos", async (_req, res) => {
  for (let i = 0; i <= 5; i += 1) {
    gm("data/buoycam.jpeg") // https://www.ndbc.noaa.gov/buoycam.php?station=51101
      .crop(480, 270, i * 480, 0)
      .write(`data/resize${i}.jpeg`, (err) => {
        if (err) throw err;
      });
  }
  gm("data/buoycam.jpeg")
    .crop(2880, 30, 0, 270)
    .write(`data/data.jpeg`, (err) => {
      if (err) throw err;
    });
  return res.status(200).json({ data: {} });
});

// app.get("/api/buoy/photos/classify", async (_req, res) => {
//   const buf = fs.readFileSync("data/resize4.jpeg");
//   const image = jpeg.decode(buf, true);
//   const model = await mobilenet.load();
//   const predictions = await model.classify(image);
//   return res.status(200).json({ data: predictions });
// });

app.get("/api/buoy", async (_req, res) => {
  const data = await buoy.getBuoyData();
  return res.status(200).json({ data });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

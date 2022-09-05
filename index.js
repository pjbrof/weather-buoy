const express = require("express");
const app = express();
const port = 3000;
const buoy = require("./api/buoy");

app.get("/api/buoy", async function (_req, res) {
  const data = await buoy.getBuoyData();
  return res.status(200).json({ data });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

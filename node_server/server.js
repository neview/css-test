const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname + "/flexible.html"));
  // res.sendFile(path.join(__dirname + "/css1.html"));
  res.sendFile(path.join(__dirname + "/touchscreenSlide.html"));
  // res.sendFile(path.join(__dirname + "/scale.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const app = express();

const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Listening for request");
});

app.use("/", (req, res) => {
  res.render("index.ejs");
});

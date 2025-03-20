// app.js
const express = require("express");
const path = require("path");
const { mainModule } = require("process");

const app = express();

app.use(express.static(path.join(__dirname, "docs")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.get("/35", (req, res) => {
  res.sendFile(path.join(__dirname, "docs/35", "main.html"));
});

app.get("/wrong", (req, res) => {
  res.sendFile(path.join(__dirname, "docs/wrong", "main.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

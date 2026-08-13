const express = require("express");

const app = express();

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

module.exports = app;

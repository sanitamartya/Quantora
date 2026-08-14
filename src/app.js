const express = require("express");

const router = require("./routes");

const app = express();

app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

module.exports = app;

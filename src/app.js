const express = require("express");

const healthRouter = require("./routes/health.routes");

const app = express();

app.use(healthRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

module.exports = app;

const express = require("express");

const router = require("./routes");

const app = express();

app.use(express.json());

app.use(router);

app.use((error, req, res, next) => {
  console.error(error);

  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      error: "Invalid JSON",
    });
  }

  res.status(500).send("Internal Server Error");
});

module.exports = app;

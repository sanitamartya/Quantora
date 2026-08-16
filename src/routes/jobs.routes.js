const express = require("express");
const { randomUUID } = require("node:crypto");

const router = express.Router();

router.post("/jobs", (req, res) => {
  const job = {
    id: randomUUID(),
    name: req.body.name,
  };

  res.status(202).json(job);
});

module.exports = router;

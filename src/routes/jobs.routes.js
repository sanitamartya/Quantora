const express = require("express");
const { randomUUID } = require("node:crypto");

const router = express.Router();

router.post("/jobs", (req, res) => {
  if (typeof req.body.name !== "string" || req.body.name.trim().length === 0) {
    return res.status(400).json({
      error: "Job name must be a non-empty string",
    });
  }

  const job = {
    id: randomUUID(),
    name: req.body.name,
  };

  res.status(202).json(job);
});

module.exports = router;

const express = require("express");
const { randomUUID } = require("node:crypto");

const router = express.Router();

router.post("/jobs", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Job name is required",
    });
  }

  const job = {
    id: randomUUID(),
    name: req.body.name,
  };

  res.status(202).json(job);
});

module.exports = router;

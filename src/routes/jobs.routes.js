const express = require("express");

const router = express.Router();

router.post("/jobs", (req, res) => {
  const job = {
    name: req.body.name,
  };

  res.status(202).json(job);
});

module.exports = router;

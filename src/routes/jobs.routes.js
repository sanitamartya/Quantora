const express = require("express");

const router = express.Router();

router.post("/jobs", (req, res) => {
  res.status(202).json({
    name: req.body.name,
  });
});

module.exports = router;

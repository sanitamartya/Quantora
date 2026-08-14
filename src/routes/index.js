const express = require("express");

const healthRouter = require("./health.routes");

const router = express.Router();

router.use(healthRouter);

module.exports = router;

const express = require("express");

const healthRouter = require("./health.routes");
const jobsRouter = require("./jobs.routes");

const router = express.Router();

router.use(healthRouter);
router.use(jobsRouter);

module.exports = router;

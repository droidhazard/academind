const express = require("express");

const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

// * '/' dashboard page => GET
router.get("/", dashboardController.getDashboard);

module.exports = router;

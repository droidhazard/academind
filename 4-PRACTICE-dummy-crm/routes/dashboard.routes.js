const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

// * '/' dashboard page => GET
router.get("/", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "dashboard.html"));
  res.render("dashboard.ejs");
});

module.exports = router;

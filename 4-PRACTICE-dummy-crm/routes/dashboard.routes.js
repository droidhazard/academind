const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "dashboard.html"));
});

module.exports = router;

const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.get("/projects", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "projects.html"));
});

module.exports = router;

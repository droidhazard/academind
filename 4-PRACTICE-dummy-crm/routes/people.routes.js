const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.get("/people", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "people.html"));
});

module.exports = router;

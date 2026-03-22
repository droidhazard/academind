const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

// * Server the homepage
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

// * Handle 404 page
router.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404-not-found.html"));
});

module.exports = router;

const path = require("path");
const express = require("express");

const router = express.Router();

// * Server the homepage
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

// * Handle 404 page
router.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "../", "views", "page-not-found.html"));
});

module.exports = router;

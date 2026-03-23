const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

// * '/people' page => GET
router.get("/people", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "people.html"));
});

// * 'people' create people submission => POST
router.post("/people", (req, res) => {
  console.log(req.body);
  res.redirect("/people");
});
module.exports = router;

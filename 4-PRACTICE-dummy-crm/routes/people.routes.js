const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

const peopleArray = [];

// * '/people' page => GET
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "people.html"));
});

// * 'people' create people submission => POST
router.post("/", (req, res) => {
  // console.log(req.body);
  peopleArray.push(req.body);
  // console.log(peopleArray);
  res.redirect("/people");
});

exports.routes = router;
exports.peopleArray = peopleArray;

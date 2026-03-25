const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

const projectsArray = [];

// * '/projects' page => GET
router.get("/", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "projects.html"));
  res.render("projects.ejs");
});

// * '/project' create project submissions => POST
router.post("/", (req, res) => {
  // console.log(req.body);
  projectsArray.push(req.body);
  // console.log(projectsArray);
  res.redirect("/projects");
});

exports.routes = router;
exports.projectsArray = projectsArray;

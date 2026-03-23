const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

// * '/projects' page => GET
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "projects.html"));
});

// * '/project' create project submissions => POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/projects");
});
module.exports = router;

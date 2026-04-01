const express = require("express");
const path = require("path");

const router = express.Router();
const projectsController = require("../controllers/projects.controller");

// * '/projects' page => GET
router.get("/", projectsController.getProjects);

// * '/project' create project submissions => POST
router.post("/", projectsController.addProject);

exports.routes = router;

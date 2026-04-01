const express = require("express");
const path = require("path");

const router = express.Router();
const peopleController = require("../controllers/people.controller");

// * '/people' page => GET
router.get("/", peopleController.getPeople);

// * 'people' create people submission => POST
router.post("/", peopleController.addPeople);

exports.routes = router;

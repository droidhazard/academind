const path = require("path");
const express = require("express");

// const rootDir = require("../utils/path");
// const adminRoutes = require("./admin.routes");
const productsController = require("../controllers/products.controller");

const router = express.Router();

// * Serve the homepage
router.get("/", productsController.getProducts);

module.exports = router;

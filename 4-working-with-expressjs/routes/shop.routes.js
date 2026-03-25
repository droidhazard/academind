const path = require("path");
const express = require("express");

// const rootDir = require("../utils/path");
// const adminRoutes = require("./admin.routes");
const productsController = require("../controllers/products.controller");

const router = express.Router();

// * Serve the homepage
router.get("/", productsController.getProducts);

// * Handle 404 page
router.use((req, res) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { docTitle: "404 Not Found", path: "/404" });
});

module.exports = router;

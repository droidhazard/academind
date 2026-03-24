const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");
const adminRoutes = require("./admin.routes");

const router = express.Router();

// * Serve the homepage
router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log(adminRoutes.products);
  const products = adminRoutes.products;
  res.render("shop", {
    products: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0 ? true : false,
    layout: false,
  });
});

// * Handle 404 page
router.use((req, res) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { docTitle: "404 Not Found" });
});

module.exports = router;

const path = require("path");
const express = require("express");

const router = express.Router();

// * /admin/add-product => POST
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// * /admin/add-product => GET
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

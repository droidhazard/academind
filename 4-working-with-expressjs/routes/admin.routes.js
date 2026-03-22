const express = require("express");

const router = express.Router();

// * /admin/add-product => POST
router.get("/add-product", (req, res, next) => {
  console.log("add-product");
  res.send(`<html><h1>The 'Add Product' Page</h1>
    <form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></html>`);
});

// * /admin/add-product => GET
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

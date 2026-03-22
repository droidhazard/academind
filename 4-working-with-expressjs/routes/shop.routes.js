const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in ANOTHER middleware");
  res.send("<h1>Hello from Express</h1>");
});

// * Handle 404 page
router.use((req, res) => {
  res
    .status(404)
    .send(
      '<h2 style="color:white;background-color:maroon; padding: 2px 10px">404 ! Page not found</h2>',
    );
});

module.exports = router;

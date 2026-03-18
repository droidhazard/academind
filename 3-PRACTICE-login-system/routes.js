const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url);
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write('{"hello": "world"}');
  res.end();
};

module.exports = requestHandler;

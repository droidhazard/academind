const http = require("http");

function rqListener(req, res) {
  console.log(req.url, req.method);
  //   console.log(res);
  //   process.exit();
  //   res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>hello</h1>");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(3333);

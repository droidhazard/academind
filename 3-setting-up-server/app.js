const http = require("http");
const fs = require("fs");

function rqListener(req, res) {
  // console.log(req.url, req.method);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("data.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
    // console.log(req.body);
  }
  //   console.log(res);
  //   process.exit();
  // res.setHeader("Content-Type", "application/json");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(3333);

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
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      // fs.writeFileSync("data.txt", message); // Blocks code execution until done
      fs.writeFile("data.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    // console.log(req.body);
  }
  //   console.log(res);
  //   process.exit();
  // res.setHeader("Content-Type", "application/json");
  // res.end();
}

const server = http.createServer(rqListener);

server.listen(3333);

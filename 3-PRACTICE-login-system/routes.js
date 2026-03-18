const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // * home page for "/"
  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Practice - Homepage</title></head>
      <body>
        <h2>Welcome to practice home</h2>
        <a href="login"><button>Login</button></a>
        <a href="register"><button>Register</button></a>
      </body>
      </html>`);
    return res.end();
  }

  // * Register page for "/register"
  if (url === "/register" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Practice - Sign Up</title></head>
      <body>
        <h2>Welcome to practice</h2>
        <form action="/register" method="POST">
        <input type="text" name="username" placeholder="username"><br>
        <input type="text" name="password" placeholder="password"><br>
        <button type="submit">Register</button>
        </form>
        <br><hr>
        <a href="login"><button>Login</button></a>
      </body>
      </html>`);
    return res.end();
  }

  // * Handle '/register' submission
  if (url === "/register" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];

    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      let parsedBody = Buffer.concat(body).toString();
      parsedBody = parsedBody.split("&").join("\n");
      console.log(parsedBody);
      fs.readFile("./database.txt", "utf-8", (err, data) => {
        // console.log("OLD DATA start:", data, "\b:OLD DATA close");
        fs.writeFile(
          "./database.txt",
          `${data}\n&&\n${parsedBody}`,
          (err) => {},
        );
      });
    });
    res.write(`<html>
      <head><title>Practice - Sign Up</title></head>
      <body>
        <h2>Welcome to practice</h2>
        <form action="/register" method="POST">
        <input type="text" name="username" placeholder="username"><br>
        <input type="text" name="password" placeholder="password"><br>
        <button type="submit">Register</button>
        </form>
        <br><hr>
        <a href="login"><button>Login</button></a>
      </body>
      </html>`);
    return res.end();
  }
};

module.exports = requestHandler;

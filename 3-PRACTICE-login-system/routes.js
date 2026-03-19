const { registerAccount } = require("./controller");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // * Homepage "/"
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

  // * Registration page "/register"
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

  // * Login page "/login"
  if (url === "/login" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Practice - Sign Up</title></head>
      <body>
        <h2>Welcome to practice</h2>
        <form action="/login" method="POST">
        <input type="text" name="username" placeholder="username"><br>
        <input type="text" name="password" placeholder="password"><br>
        <button type="submit">Login</button>
        </form>
        <br><hr>
        <a href="register"><button>Register</button></a>
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
      registerAccount(body);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // * Handle '/login' submission
  if (url === "login" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      //
    });
  }
};

module.exports = requestHandler;

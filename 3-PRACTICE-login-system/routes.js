const { registerAccount, loginAccount } = require("./controller");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // * Homepage "/"
  if (url === "/" && method === "GET") {
    // ^ Styling for banner element
    const referer = req.headers.referer || null;
    let bannerMessage, bannerElement, bannerStyle;
    if (referer.includes("register")) {
      bannerMessage = "Account registered successfully";
      bannerStyle =
        "color: #ffffff;background-color: #00ff00;padding: 2px 10px; margin: 10px -10px;";
    } else if (referer.includes("login_success")) {
      bannerMessage = "Logged in successfully";
      bannerStyle =
        "color: #ffffff;background-color: #0fa7c9;padding: 2px 10px; margin: 10px -10px;";
    } else if (referer.includes("login_failed")) {
      bannerMessage = "Incorrect username or password";
      bannerStyle =
        "color: #ffffff;background-color: #dd1c1f;padding: 2px 10px; margin: 10px -10px;";
    } else {
      bannerMessage = "";
      bannerStyle = "";
    }
    bannerElement = `<div style="${bannerStyle}">${bannerMessage}</div>`;

    // ^ Send main homepage content
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Practice - Homepage</title></head>
      <body>
        <h2>Welcome to practice home</h2>
        ${bannerElement}
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
    res.setHeader("BannerMessage", "register_success");
    res.setHeader("Location", "/");
    return res.end();
  }

  // * Handle '/login' submission
  if (url === "/login" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];
    let result = false;

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      result = loginAccount(body);
      console.log(result);
    });

    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
};

module.exports = requestHandler;

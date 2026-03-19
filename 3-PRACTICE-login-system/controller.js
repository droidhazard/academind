const fs = require("fs");

const registerAccount = (body) => {
  let parsedBody = Buffer.concat(body).toString();
  parsedBody = parsedBody.split("&").join("\n");
  console.log(parsedBody);
  fs.readFile("./database.txt", "utf-8", (err, data) => {
    // console.log("OLD DATA start:", data, "\b:OLD DATA close");
    fs.writeFile("./database.txt", `${data}\n&&\n${parsedBody}`, (err) => {});
  });
};

const loginAccount = (body) => {
  //
};

module.exports.registerAccount = registerAccount;

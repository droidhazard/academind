const fs = require("fs");

const registerAccount = (body) => {
  let parsedBody = Buffer.concat(body).toString();
  parsedBody = parsedBody.split("&").join("\n");
  // console.log(parsedBody);
  fs.readFile("./database.txt", "utf-8", (err, data) => {
    // console.log("OLD DATA start:", data, "\b:OLD DATA close");
    fs.writeFile("./database.txt", `${data}\n${parsedBody}`, (err) => {});
  });
};

const loginAccount = async (body) => {
  let parsedBody = Buffer.concat(body).toString();
  parsedBody = parsedBody.split("&").toString().split(",");
  // console.log(parsedBody);
  fs.readFile("./database.txt", "utf-8", (err, data) => {
    // console.log(data);
    // ^ Match account in database
    const usernameToLogin = parsedBody[0];
    const passToLogin = parsedBody[1];
    const dbArray = data.split("\n");
    // console.log(dbArray);
    let result = false;
    for (let i = 0; i < dbArray.length; i++) {
      if (dbArray[i] === usernameToLogin && dbArray[i + 1] === passToLogin) {
        console.log("username and pass MATCHED");
        result = true;
        break;
      } else {
        console.log("incorrect username or pass");
      }
    }
    console.log(result);
    return result;
  });
};

module.exports.registerAccount = registerAccount;
module.exports.loginAccount = loginAccount;

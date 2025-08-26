console.log("Hello form Node.js");

const fs = require("fs");

fs.writeFileSync("hel.txt", "Hello\nWorld1", "utf-8");

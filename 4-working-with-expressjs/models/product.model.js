const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

// const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // products.push(this);
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      //   console.log(JSON.parse(data));
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      if (err) {
        return [];
      }
      return JSON.parse(data);
    });
  }
};

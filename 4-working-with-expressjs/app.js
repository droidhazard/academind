const path = require("path");

const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin.routes");
const shopRoutes = require("./routes/shop.routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

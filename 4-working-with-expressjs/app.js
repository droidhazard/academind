const path = require("path");

const express = require("express");
// const expressHbs = require("express-handlebars");
// const bodyParser = require("body-parser");

const errorController = require("./controllers/error.controller");

const app = express();
app.use(express.urlencoded());

// ^ Handlebars options
// app.engine(
//   "hbs",
//   expressHbs.engine({
//     defaultLayout: "main-layout",
//     layoutsDir: "./views/layouts",
//     extname: "hbs",
//   }),
// );

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin.routes");
const shopRoutes = require("./routes/shop.routes");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// * Handle 404 page
app.use("/", errorController.get404);

// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

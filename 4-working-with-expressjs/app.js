const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin.routes");
const shopRoutes = require("./routes/shop.routes");

app.use(express.urlencoded());
app.use("/admin", adminRoutes);
app.use(shopRoutes);
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

const express = require("express");
const path = require("path");
app = express();

const dashboardRoutes = require("./routes/dashboard.routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(dashboardRoutes);

app.listen(3000);

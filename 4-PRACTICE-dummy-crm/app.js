const express = require("express");
app = express();

const dashboardRoutes = require("./routes/dashboard.routes");

app.use(dashboardRoutes);

app.listen(3000);

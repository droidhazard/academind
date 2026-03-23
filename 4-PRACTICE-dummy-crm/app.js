const express = require("express");
const path = require("path");
app = express();

const dashboardRoutes = require("./routes/dashboard.routes");
const peopleRoutes = require("./routes/people.routes");
const projectsRoutes = require("./routes/projects.routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(dashboardRoutes);
app.use(peopleRoutes);
app.use(projectsRoutes);

app.listen(3000);

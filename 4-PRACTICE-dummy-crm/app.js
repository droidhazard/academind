const express = require("express");
const path = require("path");
app = express();

const rootDir = require("./util/path");

const dashboardRoutes = require("./routes/dashboard.routes");
const peopleRoutes = require("./routes/people.routes");
const projectsRoutes = require("./routes/projects.routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.set("render engine", "ejs");
app.set("views", "views");

app.use(dashboardRoutes);
app.use("/people", peopleRoutes.routes);
app.use("/projects", projectsRoutes.routes);

// * Handle 404 page
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res
    .status(404)
    .render("404.ejs", {
      pageTitle: "404 Not Found",
      path: "404",
      path: "egg",
    });
});

app.listen(3000);

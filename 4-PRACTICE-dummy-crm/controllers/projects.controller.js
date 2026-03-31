const projectsArray = [];

exports.getProjects = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "projects.html"));
  res.render("projects.ejs", {
    pageTitle: "Projects - Dummy CRM",
    path: "/projects",
    projectsArray: projectsArray,
  });
};

exports.addProject = (req, res) => {
  // console.log(req.body);
  projectsArray.push(req.body);
  console.log(projectsArray);
  res.redirect("/projects");
};

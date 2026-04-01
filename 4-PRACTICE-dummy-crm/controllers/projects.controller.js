// const projectsArray = [];

const Project = require("../models/project.model");

exports.getProjects = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "projects.html"));
  const projects = Project.fetchAll();
  res.render("projects.ejs", {
    pageTitle: "Projects - Dummy CRM",
    path: "/projects",
    projectsArray: projects,
  });
};

exports.addProject = (req, res) => {
  // console.log(req.body);
  // projectsArray.push(req.body);
  // console.log(projectsArray);
  const project = new Project(
    req.body.title,
    req.body.contact,
    req.body.assigned,
    req.body.priority,
    req.body.duedate,
  );
  project.save();
  res.redirect("/projects");
};

const Project = require("../models/project.model");

exports.getProjects = (req, res) => {
  const projects = Project.fetchAll();
  res.render("projects.ejs", {
    pageTitle: "Projects - Dummy CRM",
    path: "/projects",
    projectsArray: projects,
  });
};

exports.addProject = (req, res) => {
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

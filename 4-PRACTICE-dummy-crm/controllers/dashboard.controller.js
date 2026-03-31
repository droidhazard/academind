exports.getDashboard = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "dashboard.html"));
  res.render("dashboard.ejs", {
    pageTitle: "Dashboard - Dummy CRM",
    path: "/",
  });
};

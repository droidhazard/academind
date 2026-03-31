exports.getErrorPage = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404.ejs", {
    pageTitle: "404 Not Found",
    path: "404",
    path: "egg",
  });
};

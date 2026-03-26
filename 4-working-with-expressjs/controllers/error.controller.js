exports.get404 = (req, res) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { docTitle: "404 Not Found", path: "/404" });
};

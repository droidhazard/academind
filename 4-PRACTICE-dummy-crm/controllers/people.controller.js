const peopleArray = [];

exports.getPeople = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "people.html"));
  res.render("people.ejs", {
    pageTitle: "People - Dummy CRM",
    path: "/people",
    peopleArray: peopleArray,
  });
};

exports.addPeople = (req, res) => {
  // console.log(req.body);
  peopleArray.push(req.body);
  // console.log(peopleArray);
  res.redirect("/people");
};

const People = require("../models/people.model");

exports.getPeople = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "people.html"));
  const people = People.fetchAll();
  res.render("people.ejs", {
    pageTitle: "People - Dummy CRM",
    path: "/people",
    peopleArray: people,
  });
};

exports.addPeople = (req, res) => {
  // console.log(req.body);
  // peopleArray.push(req.body);
  const people = new People(
    req.body.fname,
    req.body.lname,
    req.body.addr,
    req.body.email,
    req.body.phone,
  );
  people.save();
  // console.log(peopleArray);
  res.redirect("/people");
};

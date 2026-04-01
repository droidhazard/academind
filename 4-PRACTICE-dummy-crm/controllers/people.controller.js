const People = require("../models/people.model");

exports.getPeople = (req, res) => {
  const people = People.fetchAll();
  res.render("people.ejs", {
    pageTitle: "People - Dummy CRM",
    path: "/people",
    peopleArray: people,
  });
};

exports.addPeople = (req, res) => {
  const people = new People(
    req.body.fname,
    req.body.lname,
    req.body.addr,
    req.body.email,
    req.body.phone,
  );
  people.save();
  res.redirect("/people");
};

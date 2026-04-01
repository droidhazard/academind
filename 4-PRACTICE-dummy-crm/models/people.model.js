const people = [];

module.exports = class People {
  constructor(fname, lname, addr, email, phone) {
    this.firstName = fname;
    this.lastName = lname;
    this.address = addr;
    this.email = email;
    this.phone = phone;
  }

  save() {
    people.push(this);
  }

  static fetchAll() {
    return people;
  }
};

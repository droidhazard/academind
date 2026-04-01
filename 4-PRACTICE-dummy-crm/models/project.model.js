const projects = [];

module.exports = class Project {
  constructor(title, contact, assigned, priority, duedate) {
    this.title = title;
    this.contact = contact;
    this.assigned = assigned;
    this.priority = priority;
    this.duedate = duedate;
  }

  save() {
    projects.push(this);
  }

  static fetchAll() {
    return projects;
  }
};

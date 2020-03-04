const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, school) {
    super(name, id);
    this.title = "Intern";
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

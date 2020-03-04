class Employee {
  constructor(name, id) {
    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!id) {
      throw new Error("You are missing the id.");
    }
    if (!title) {
      throw new Error("You are missing the title.");
    }
    this.name = name;
    this.id = id;
    //Default title should be set to employee
    this.title = "Employee";
    //will set logic to capture last name / diversify if multiple same last names
    this.email = `${name}@email.com`;
  }

  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }

  getEmail() {
    return this.getEmail;
  }

  getRole() {
    return this.title;
  }
}

module.exports = Employee;

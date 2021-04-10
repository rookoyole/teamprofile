

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'




const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
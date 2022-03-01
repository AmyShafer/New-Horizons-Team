const inquirer = require("inquirer");
const chalk = require("chalk");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// The Employee constructor is responsible for keeping the team members together

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
    return this.Employee;
  }
}

module.exports = Employee;
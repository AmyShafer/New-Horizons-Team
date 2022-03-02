// In addition to Employee's properties and methods, Engineer will also have the following: 
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super (name, id, email, github)
    this.github = github;
  }

  getGithub() {
    return this.github; 
  }

  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer("Alice", 4721, "ralph@photoguy.com", "RalphCarr");

console.log('---Engineer---');
engineer.getGithub();
engineer.getRole();
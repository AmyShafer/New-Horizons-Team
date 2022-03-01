// In addition to Employee's properties and methods, Engineer will also have the following: 
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer {
  constructor(github) {
    this.github = github;
  }

  getGithub() {
    return this.github; 
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
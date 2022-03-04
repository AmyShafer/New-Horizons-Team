const Employee = require("./Employee");

class Intern extends Employee { 
  constructor(name, id, email, school) {
    super (name, id, email)
    this.school = school;
  }

  getSchool() {
    return this.school; 
  }
  
  getRole() {
    return "Intern";
  }

  setSchool(school) {
    this.school = school;
  }

  setRole(role) {
    this.role = role;
  }
}  

module.exports = Intern;

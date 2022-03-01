// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Employee = require("./Employee");

class Intern extends Employee { 
  constructor(name, id, email, school) {
    super (name, id, email, school)
    this.school = school;
  }

  getSchool() {
    return this.school; 
  }
  
  getRole() {
    return "Intern";
  }
}  

const intern = new Intern("Rex", 3456, rex@therunt.com, "Jupiter School for Moons");

console.log('---INTERN---');
intern.getSchool();
intern.getRole();
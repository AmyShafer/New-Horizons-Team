const Employee = require("./employee");

class Manager extends Employee {
  officeNumber = "";
  constructor(name, id, email, officeNumber, roleAdded) {
    super (name, id, email)
    this.officeNumber = officeNumber;
    this.roleAdded = roleAdded;
  }  
  
  getRole() {
    return "Manager"; 
  }

}

module.exports = Manager;
const Employee = require("./employee");

class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    super (name, id, email, officeNumber)
    this.officeNumber = officeNumber;
  }  
  
  getRole() {
    return "Manager"; 
  }
}

const manager = new Manager("Alice", 4721, "alice.bowman@nasa.com", "299-792-4581");

console.log('---MANAGER---');
manager.getRole();
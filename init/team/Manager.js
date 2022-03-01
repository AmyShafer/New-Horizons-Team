
class Manager {
  constructor (officeNumber) {
    this.officeNumber = officeNumber;
  }  
  
  getRole() {
    return "Manager"; 
    // getRole()—overridden to return 'Manager'   
  }
}

module.exports = Manager;
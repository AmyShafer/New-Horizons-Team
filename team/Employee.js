// The Employee constructor - Everyone in the team is an employee

class Employee {
  constructor(role, name, id, email) {
    this.role = role;
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
    return this.role;
  }
}

const employee = new Employee("Manager", "Marcus", 45, "marcus@white.com")
console.log('---EMPLOYEE--');
const employeeName = employee.getName();
console.log(employeeName);

module.exports = Employee;
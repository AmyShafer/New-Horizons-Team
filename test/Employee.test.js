const Employee = require("../team/Employee.js");

describe("Employee", () => {
  it("should return the employee's role", () => {
    const employee = new Employee("Alice", 4721, "alice.bowman@nasa.com");
    expect(employee.getRole()).toBe("Employee");
  });
  it("should return the employee id number", () => {
    const employeeId = new Employee("Alice", 4721, "alice.bowman@nasa.com");
    expect(employeeId.getId()).toBe(4721);
  });
});
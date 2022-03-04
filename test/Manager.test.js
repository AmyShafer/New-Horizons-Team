const Employee = require("../team/Employee.js");
const Manager = require("../team/Manager.js");

describe('Manager', () => {
  it("should create a new manager", () => {
    const manager = new Manager ("Rex", 3290, "rex.the.runt@nasa.com", "789-039-2483");
    expect(manager.getRole()).toBe("Manager");
  });
  it("should display the manager's office number", () => {
    const manager = new Manager ("Rex", 3290, "rex.the.runt@nasa.com", "789-039-2483");
    expect(manager.officeNumber).toBe("789-039-2483");
  });
});
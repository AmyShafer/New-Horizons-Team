const Employee = require("../team/Employee.js");
const Manager = require("../team/Manager.js");

describe('Manager', () => {
  it("should create a new manager", () => {
    const manager = new Manager ("Rex", 3290, "rex.the.runt@nasa.com", "789-039-2483");
    expect(manager.toRole()).toBe("Manager");
  });
  it("should display the manager's office number", () => {
    const managerNumber = new Manager("Ralph", 4939, "ralph@nasa.com", "382-938-1839");
    expect(managerNumber.officeNumber()).toBe("382-938-1839");
  });
});
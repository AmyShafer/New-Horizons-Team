const Employee = require("../team/Employee.js");
const Intern = require("../team/Intern.js");

describe("Intern", () => {
  it("should return the intern role", () => {
    const intern = new Intern("Venetia", 1930, "v.b.phair@nasa.com", "Epsom University");
    expect(intern.getRole()).toBe("Intern"); 
  });
  it("should provide the school the intern is attending", () => {
    const internSchool = new Intern("Venetia", 1930, "v.b.phair@nasa.com", "Epsom University");
    expect(internSchool.getSchool()).toBe("Epsom University");
  }); 
});
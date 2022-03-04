const Employee = require("../team/Employee.js");
const Engineer = require("../team/Engineer.js");

describe("Engineer", () => {
  it("should return Engineer", () => {
    const engineer = new Engineer("Alan Stern", 9203, "sterny@nasa.com", "AlanSternNASA");
    expect(engineer.getRole()).toBe("Engineer");    
  });
  it("should return the engineer's GitHub name", () => {
    const engineerGitHub = new Engineer("Alan Stern", 9203, "sterny@nasa.com", "AlanSternNASA");   
    expect(engineerGitHub.getGithub().toBe("AlanSternNASA")); 
  });    
});
const inquirer = require("inquirer");
const Employee = require("./team/Employee");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const Manager = require("./team/Manager");
const managerQuestions = require("./teamQuestions");
const engineerQuestions = require("./teamQuestions");
const internQuestions = require("./teamQuestions");

const team = [];

function addManager(userInput) {
  return inquirer.prompt(userInput)
// manager = new Manager();
// team.push(manager);
// manager.setName(answers.name);
};

function addEngineer(userInput) {
  return inquirer.prompt(userInput)
  // engineer = new Engineer();
  // team.push(engineer);
  // engineer.setName(answers.name);
};

function addIntern(userInput) {
  return inquirer.prompt(userInput)
  // intern = new Intern();
  // team.push(intern);
  // intern.setName(answers.name);
};

// Pull data from the user inputs to dynamically create a team of employees
const generateTeam = () => {
  console.log("Welcome to New Horizons, the first team to explore Pluto up close via spacecraft. Join us as we continue our journey into the solar system's coldest, darkest frontiers. \n Assemble your team:");
  const manager = new Manager(addManager(managerQuestions))
  return manager
    
    .then(answers => {
      team.push(answers);
    if (answers.team === 'Engineer') {
      engineer = new Engineer(addEngineer(engineerQuestions));
      team.push(engineer);
      console.log("TEAM:" + team);
    } else if (answers.team === 'Intern') {   
      intern = new Intern(addIntern(internQuestions));
      team.push(intern);
    } 
  });
}

generateTeam();

module.exports = generateTeam;
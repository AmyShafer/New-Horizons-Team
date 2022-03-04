const Employee = require("./team/Employee");
// Create a new team member
const employee = new Employee();
// Add a team member
employee.getRole();

const inquirer = require("inquirer");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const Manager = require("./team/Manager");

const team = [];

// Pull data from the user inputs to dynamically create a team of employees
const generateTeam = () => {
  console.log("Welcome to New Horizons, the first team to explore Pluto up close via spacecraft. Join us as we continue our journey into the solar system's coldest, darkest frontiers. \n Assemble your team:");
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the team manager\'s name?',    
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the team manager\'s id?',
      name: 'id',    
    },
    {
      type: 'input',
      message: 'What is the team manager\'s email?',
      name: 'email',    
    },
    {
      type: 'list',
      message: 'Which type of team member would you like to add?',
      name: 'team',    
      choices: [
        {
          name: 'Engineer',
        },
        {
          name: 'Intern',
        },
      ],
    },}
    .then (answers => {
      if (answers.choices === 'Engineer') {
        engineer = new Engineer();
        team.push(engineer);
        engineer.setName(answers.name);
      } else if (answers.choices === 'Intern') {
        intern = new Intern();
        team.push(intern);
        intern.setName(answers.name);
      } else {
        manager = new Manager();
        team.push(manager);
        manager.setName(answers.name);
      }
    }
    // questions for engineer class
    {
      type: 'input',
      message: 'What is the engineer\'s name?',    
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s id?',
      name: 'id',    
    },
    {
      type: 'input',
      message: 'What is the engineer\'s email?',
      name: 'email',    
    },
    {
      type: 'input',
      message: 'What is the engineer\'s GitHub user name?',
      name: 'github',    
    },
    // questions for intern class
    {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'name',    
    },
    {
      type: 'input',
      message: 'What is the intern\'s id?',    
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the intern\'s email?',
      name: 'email',    
    },
    {
      type: 'input',
      message: 'What is the intern\s school?',
      name: 'school',    
    },
  );
}:

module.exports = generateTeam;
const Employee = require("./team/Employee");
// Create a new team member
const employee = new Employee();
// Add a team member
employee.getRole();

const inquirer = require('inquirer');
const Engineer = require("./team/Engineer");

const team = [];

inquirer.prompt(questions about manager, and which employee they want to add next)
.then(answers => {
//create manager
//if statement to figure out which employee they want to make,
if engineer
createEngineer
else if intern
createIntern
else
createManager

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
    },)
    .then (answers => {
      if (answers.choices === 'Engineer') {
        engineer = new Engineer();
        // call function to create a new engineer
        // add the new team member to the team - each team member is a class
      } else if (answers.choices === 'Intern') {
        // call function to create a new intern
      } else {
        // call function to create a new manager
      }
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
  ]); 
};

module.exports = generateTeam;
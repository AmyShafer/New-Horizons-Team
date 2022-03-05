const inquirer = require("inquirer");
const Employee = require("./team/Employee");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const Manager = require("./team/Manager");
// const managerQuestions = require("./teamQuestions");
// const engineerQuestions = require("./teamQuestions");
// const internQuestions = require("./teamQuestions");

const team = [];

async function addManager() {
  const answers = await inquirer.prompt([
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
      type: 'input',
      message: 'What is the team manager\'s office number?',
      name: 'officeNumber',
    },
  ])
  
    console.log({answers});
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber,
      answers.roleAdded);

      team.push(manager);
      console.log("TEAM: " + JSON.stringify(team));

  return answers;
};

async function addToTeam() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      message: 'What role would you like to add to your team?',
      name: 'roleAdded',
      choices: [
        {
          name: 'Engineer',
        },
        {
          name: 'Intern',
        },
        {
          name: 'My team is complete!',
        },
      ],
    }])

    console.log({answers});
}

async function addEngineer() {
  const answers = await inquirer.prompt([
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
    }
  ])

    console.log({answers});
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github);

      team.push(engineer);
      console.log("TEAM: " + JSON.stringify(team));

  return answers;
};

async function addIntern() {
  const answers = await inquirer.prompt([
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
      message: 'What is the intern\'s school?',
      name: 'school',
    }
  ])

    console.log({answers});
    const intern = new Intern(
      answers.name,
      answers.id, 
      answers.email,
      answers.school);

      team.push(intern);
      console.log("TEAM: " + JSON.stringify(team));
  
  return answers;
};

// Pull data from the user inputs to dynamically create a team of employees
const generateTeam = async() => {
  console.log("Welcome to New Horizons, the first team to explore Pluto up close via spacecraft. Join us as we continue our journey into the solar system's coldest, darkest frontiers. \n Assemble your team:");
  const answers = await addManager()
  
    addToTeam();
}

generateTeam();

module.exports = generateTeam;


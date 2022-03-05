
// questions for manager class
const managerQuestions = [
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
}];
  
// questions for engineer class
const engineerQuestions = [
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
];

// questions for intern class
const internQuestions = [
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
];
  
module.exports = { managerQuestions, engineerQuestions, internQuestions };
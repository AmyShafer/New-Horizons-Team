const inquirer = require('inquirer');

// Pull data from the uses inputs to dynamically create a readme file
const generateReadme = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',    
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a brief description of your project:',
      name: 'description',    
    },
    {
      type: 'input',
      message: 'Please inform the user how to install the application:',
      name: 'instructions',    
    },
    {
      type: 'input',
      message: 'Provide the file name for a screenshot of your project:',
      name: 'usage',    
    },
    {
      type: 'list',
      message: 'Please choose a license:',
      name: 'license',    
      choices: [
        {
          name: 'MIT',
        },
        {
          name: 'Apache License',
        },
        {
          name: 'GPL License', 
        },
      ],
    },
    {
      type: 'input',
      message: 'How should users contribute?',
      name: 'contributing',    
    },
    {
      type: 'input',
      message: 'Run some tests.',
      name: 'tests',    
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }
  ]); 
};

module.exports = generateReadme;
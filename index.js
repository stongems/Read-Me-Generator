const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadMe = require("./generateReadMe");
//  title of my project and sections entitled Description, Installation, Usage, License, Contributing, Tests, and Questions
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What was your installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your usage?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Type of license',
      choices:  ["Apache", "IBM", "Mozilla", "MIT"]
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter your test.',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What questions do you have?',
    },
    {
      type: 'input',
      name: 'contributings',
      message: 'Who helped on this project?',
    },
  ]);
};

 

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();


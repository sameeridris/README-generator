// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your Project?'
        },
        {
            name: 'description',
            type: 'input',
            message: 'How would you describe your Project?',
        },
        {
            name: 'instillation',
            type: 'input',
            message: 'How would you install your Project?'
        },
        {
            name: 'usage',
            type: 'input',
            message: 'How would you use your Project?'
        },
        {
            name: 'license',
            type: 'choice',
            message: 'What license would you like to run?',
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'How would you want other people to contribute to your Project?',
        },
        {
            name: 'tests',
            type: 'input',
            message: 'How do you run tests for this application?',
        },
        {
            name: 'questions',
            type: 'input',
            message: 'Who would you contact for questions about this repository?',
        },
    ])
    .then((response) => {
        fs.writeFile('README.md', `# <${response.title}>

## Description

${response.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.instillation}

## Usage

${response.usage}

## License

${response.license}

## How to Contribute

${response.contributing}

## Tests

${response.tests}

## Questions

${response.questions}
`, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file!')
        );
    });

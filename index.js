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
        fs.writeFile('README.md', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Mini Project</title>
</head>
<body>
    <h1>
        ${response.name}
    </h1>
    <h2>
        Im based in ${response.location}.
    </h2>
    <section>
        ${response.bio}
    </section>
    <nav>
        Contact me: 
        <ul>
            <li>LinkedIn URL: ${response.LinkedInUrl}</li>
            <li>GitHub URL: ${response.GitHubURL}</li>
            <li>Email: (insert mailto link)</li>
        </ul>
    </nav>
</body>
</html>`, (err) =>
            err ? console.log(err) : console.log('Successfully created index HTML file!')
        );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

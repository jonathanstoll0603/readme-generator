const fs = require("fs");
const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown)

// TODO: Create a function to write README file
function init() {
    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'projectName'
            },
            {
                type: 'input',
                message: 'Please write a short description of your project.',
                name: 'description'
            },
            {
                type: 'list',
                message: 'What type of liscense should your project include?',
                name: 'license',
                choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
            },
            {
                type: 'input',
                message: 'What command should be used to install dependencies?',
                name: 'install'
                // npm i
            },
            {
                type: 'input',
                message: 'What command should be used to run test?',
                name: 'test'
                // npm test
            },
            {
                type: 'input',
                message: 'What does the user need to know about using the repository?',
                name: 'use'
                // npm test
            },
            {
                type: 'input',
                message: 'What does the user need to know about contributing to the repository?',
                name: 'contribution'
                // npm test
            }
        ])
    }

    promptUser().then((response) => {
        const readmeTemplate = generateMarkdown(response)
    
        writeFileAsync("READMEexample.md", readmeTemplate)
        .then(() => {
            console.log("Generating README....")
        })
        .catch(err => console.error(err));
        
    })
}

// const generateMarkdown = ({ github, email, projectName, description, license, install, test, use, contribution}) => {
//     return ` 
//     #${projectName}

    
//     `
// }

// Function call to initialize app
init();

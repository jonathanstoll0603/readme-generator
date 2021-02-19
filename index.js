const fs = require("fs"); //fs import
const inquirer = require("inquirer"); //Inquirer import
const { prompt } = require("inquirer");
const util = require("util"); //Util import for writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile); // For async function
const generateMarkdown = require("./utils/generateMarkdown"); //Import from generateMarkdown file

// Function that initiates upon node being run
function init() {
    // Function that calls inquirer.prompt, and prompts user with info below
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

    // after user completes inquirer prompt..
    promptUser().then((response) => {
        // variable that takes generateMarkdown functions, and adds in inquirer responses
        const readmeTemplate = generateMarkdown(response)
    
        // (Create a md file called READMEexample, fill the file with generateMarkdown)
        writeFileAsync("READMEexample.md", readmeTemplate)
        .then(() => {
            console.log("Generating README....")
        })
        .catch(err => console.error(err));
        
    })
}

// Function call to initialize app
init();

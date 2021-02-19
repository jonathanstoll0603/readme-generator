// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (license == "none") {
        return;
    } else {
    renderLicenseLink(license);
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
    if (license == "none") {
        return;
    } else if (license == "MIT") {
        return `https://img.shields.io/badge/License-MIT-yellow.svg`
    } else if (license == "Apache 2.0") {
        return `https://img.shields.io/badge/License-Apache%202.0-blue.svg`
    } else if (license == "GPL 3.0") {
        return `https://img.shields.io/badge/License-GPLv3-blue.svg`
    } else if (license == "BSD 3") {
        return `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ github, email, projectName, description, license, install, test, use, contribution}) => {
    return `
    # ${projectName}

    ![GitHub License](` + renderLicenseLink({license}) + `)
    
    ---
    
    ## Description
    
    ${description}
    
    ---
    
    ## Table of Contents
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contribution](#contribution)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    ---
    
    ## Installation
    To install the necessary dependancies run the following command:
    
    \`\`\`\
    ${install}
    \`\`\`\
    ---
    
    
    ## Usage
    
    ${use}
    
    ---
    
    ## License
    
    This project is licensed under the ${license} license.
    
    ---
    
    ## Contributions
    
    ${contribution}
    
    ---
    
    ## Tests
    
    To run tests, run the following command:
    
    \`\`\`\
    ${test}
    \`\`\`\
    
    ---
    
    ## Questions
    
    For any questions, please contact us via email at ${email}, or GitHub at ![Github Account](${github}).
    
    ---   

    `;
}

module.exports = generateMarkdown;
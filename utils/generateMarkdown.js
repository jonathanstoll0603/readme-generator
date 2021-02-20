// Function that renders the license badge of selected inquirer prompt
const renderLicenseBadge = (license) => {
    // If there is no license, return an empty string
    if (license == "None") {
        return "";
    // Else return license badge that was selected during the inquirer prompt
    } else if (license == "MIT") {
        return `![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license == "Apache 2.0") {
        return `![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else if (license == "GPL 3.0") {
        return `![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license == "BSD 3") {
        return `![License: ${license}](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
    }
}

// Function that renders clickable license link
const renderLicenseLink = (license) => {
    // If there is no license, return an empty string
    if (license == "None") {
        return "";
    // Else return the license link that was selected in inquirer prompt
    } else if (license == "MIT") {
        return `[${license}](https://opensource.org/licenses/MIT)`
    } else if (license == "Apache 2.0") {
        return `[${license}](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == "GPL 3.0") {
        return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "BSD 3") {
        return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
    }
}

// Function that will render a license seciton to the readme
function renderLicenseSection(license) {
    // If there is no license, return an empty string
    if (license == "None") {
        return ""
    // Else return license section
    } else {
        return `   
## License
        
This project is licensed under the ${renderLicenseLink(license)} license. Follow the link for further information regarding this license. 
        
---
        `
    }
}

// Function that creates the markdown format and inputs to be used in index.js
const generateMarkdown = ({ github, email, projectName, description, license, install, test, use, contribution}) => {
    return `
# ${projectName}

${renderLicenseBadge(license)}
    
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
    
${renderLicenseSection(license)}
    
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
    
For any questions, please contact us via email at ${email}, or GitHub at ${github}.
    
---   

    `;
}

// Exports file
module.exports = generateMarkdown;
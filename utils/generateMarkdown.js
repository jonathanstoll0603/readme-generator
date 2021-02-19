// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${projectName}

  ![GitHub License](url to selected license)
  
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
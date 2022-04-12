// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}


  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.

  `;
}

// module.exports = generateMarkdown;

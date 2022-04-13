// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 let badges;
 switch (license) {
   case 'MIT': 
    badges= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  //  licenseURL: "https://opensource.org/licenses/MIT"
    break;
    case 'Apache' :
      badges= '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU-GPL-3':
      badges="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
    badges= '';
   }
   return badges;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgesURL;
  switch(license) {
    case 'MIT' :
      badgesURL= "(https://opensource.org/licenses/MIT)"
  }
  return badgesURL
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function that creates all the layout for the README file
const generateMarkdown = ({title, license, description, installation, usage, contributing, github, tests, email}) =>   {
let badges= renderLicenseBadge(license);
let badgesURL= renderLicenseLink(license)
let readMePageContent = ` # ${title}  

${badges}  

## Description
${description}  

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)  

## Installation
${installation}  

## Usage
${usage}  

## Contributing
${contributing}  

## Tests
${tests}  

## Questions  
If you have any questions about this project, please contact me directly at ${email}. You can view more of my projects at https://github.com/${github}.

## License
Copyright (c) 2022 Sarah Turner
${license} for more information, visit ${badgesURL}  `

return readMePageContent
}
//exports function generateMarkdown to index.js
module.exports = generateMarkdown;

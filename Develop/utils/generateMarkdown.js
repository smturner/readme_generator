//Function that returns badges of each license
function renderLicenseBadge(license) {
 let badges;
 switch (license) {
   case 'MIT': 
    badges= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case 'Apache' :
      badges= '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU-3':
      badges="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
    badges= '';
   }
   return badges;
  }

//Function that returns license links
function renderLicenseLink(license) {
  let badgesURL;
  switch(license) {
    case 'MIT' :
      badgesURL= '<a href= "(https://opensource.org/licenses/MIT)">Open Source MIT</a>';
      break;
      case 'Apache' :
        badgesURL= '<a href= "(https://opensource.org/licenses/Apache-2.0)">Open Source Apache</a>';
      break;
      case 'GNU-3' :
        badgesURL='<a href= "(https://www.gnu.org/licenses/gpl-3.0)"></a>';
        break;
        default:
          badgesURL='';
  }
  return badgesURL
}

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
If you have any questions about this project, please email me directly at ${email}.

You can view more of my projects at https://github.com/${github}.

## License
Copyright (c) 2022 Sarah Turner

This application is licensed by ${license}. For more information on this license, visit ${badgesURL}.  `

return readMePageContent
}

//exports function generateMarkdown to index.js
module.exports = generateMarkdown;

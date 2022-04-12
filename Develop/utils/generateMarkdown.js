// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 let badges;
 switch (license) {
   case 'MIT': 
    badges="https://img.shields.io/badge/License-MIT-yellow.svg";
  //  licenseURL: "https://opensource.org/licenses/MIT"
    break;
    case 'Apache' :
      badges= '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU-GPL-3':
      badges="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
    badges= '';
   }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// const generateMarkdown = data => {
//   return `# ${data.title}
//   ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue)

//   ## Description
//   ${data.description}

//   ## Table of Contents

//   ## Installation
//   ${data.installation}

//   ## Usage
//   ${data.usage}

//   ## Contributing
//   ${data.contributing}


//   ## License
//   ${data.license}

//   ## Tests
//   ${data.tests}

//   ## Questions
//   If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.

//   `;
// }

// module.exports = generateMarkdown;

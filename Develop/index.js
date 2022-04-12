//Packages required for function
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt ([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 1.0', 'GNU GeneralPublic v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public 2.0', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },
])

.then((answers) => {
    console.log(answers)
    fs.writeFile ('README.md', generateMarkdown(answers), function(err) {
        if(err){
            console.log(err)
        }else {
            console.log('Created new README.md file!')
        }
    })
})

const generateMarkdown = ({github}) => 
    `# ${data.title}
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue);
  
    ## Description
    ${data.description}
  
    ## Table of Contents
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${usage}
  
    ## Contributing
    ${contributing}
  
  
    ## License
    ${license}
  
    ## Tests
    ${tests}
  
    ## Questions
    If you have any questions about this project, please contact me directly at ${email}. You can view more of my projects at https://github.com/${github}.
  
    `
  
// const generateREADME= ({github })
    // const readMePageContent = questions(answers);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Successfully created README.md file!'))



// TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();


// inquirer.prompt(questions)


// then((answers) => {
//     // console.log(JSON.stringify(answers, nul, ' '));
// })
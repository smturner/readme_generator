//Packages required for function
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');

inquirer
.prompt ([
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
        message: 'Who contributed to this repo?'
    },
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
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [ 'MIT','Apache', 'GNU-3', 'none' ],
    },
])

.then((answers) => {
    console.log(answers)
    fs.writeFile ('README.md', generateMarkdown(answers), function(err) {
        if(err){
            console.log(err)
        }else {
            console.log('Creating a new README.md file!')
        }
    })
})

// const generateMarkdown = ({title, license, description, installation, usage, contributing, github, tests, email}) => 
// ` # ${title} 

// ## Description
// ${description}  

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)
// - [License](#license)  

// ## Installation
// ${installation}  

// ## Usage
// ${usage}  

// ## Contributing
// ${contributing}  

// ## Tests
// ${tests}  

// ## Questions  
// If you have any questions about this project, please contact me directly at ${email}. You can view more of my projects at https://github.com/${github}.

// ## License
// Copyright (c) [year] [Sarah Turner]
// ${license}  `
   

// const generateREADME= ({github })
    // const readMePageContent = questions(answers);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Successfully created README.md file!'))



// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();


// inquirer.prompt(questions)


// then((answers) => {
//     // console.log(JSON.stringify(answers, nul, ' '));
// })
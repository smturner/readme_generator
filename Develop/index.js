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


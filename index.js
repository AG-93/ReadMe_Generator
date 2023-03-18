const fs = require("fs/promises");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type : 'input',
        name : 'github',
        message : 'What is your Github username?😇'
    },
    {
        type : 'input',
        name : 'email',
        message : 'What is your email address? 📧'
    },
    {
        type : 'input',
        name : 'Title',
        message : "What is your project's name? "
    },
    {
        type : 'input',
        name : 'description',
        message : 'What write a short description of your project?'
    },
    {
        type : 'list',
        name : 'lincense',
        message : 'What kind of license?',
        choices : ["MIT", "APACHE 2.0", "GPL", "None"]
    },
    {
        type : 'input',
        name : 'installation',
        message : 'What command should run to install dependencies?',
        default: 'npm 1'
    },
    {
        type : 'input',
        name : 'test',
        message : 'What command should run to run test?',
        default: 'npm 1 test'
    },
    {
        type : 'input',
        name : 'usage',
        message : 'What does the user need to know about using the repo?',
    },
    {
        type : 'input',
        name : 'contribution',
        message : 'What does the user need to know about contributing to the repo?',
    },

];

// function to write README file
function writeToFile(fileName, data) { 
    console.log(fileName, data)
    fs.writeFile(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        console.log(response)
        writeToFile('README.md', generateMarkdown({...response}))
    }).catch ((err)=> console.log(err))
}

// function call to initialize program
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is you project name",
        name: "title"
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "solve"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn"
    },
    {
        type: "input",
        message: "What makes your project stand out?",
        name: "standout"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "What are the usage instructions?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who were your collaborators? (If there are multiple collaborators then comma separate them.)",
        name: "collaborators"
    },
    {
        type: "input",
        message: "What are 3rd-party assets that require attribution? (If there are multiple 3rd-party assets then comma separate them.)", 
        name: "thirdparty"
    },
    {
        type: "input",
        message: "What tutorials did you use? (Please place a comma in after each URL.)",
        name: "tutorials"
    },
    {
        type: "checkbox",
        message: "What is/are the license(s) for this project? (Pick from the list below.)",
        choices: [
            {
                name: "GNU AGPLv3",
            },
            {
                name: "GNU GPLv3",
            },
            {
                name: "GNU LGPLv3",
            },
            {
                name: "Mozilla Public License 2.0",
            },
            {
                name: "Apache License 2.0",
            },
            {
                name: "MIT License",
            },
            {
                name: "Boost Software License 1.0",
            },
            {
                name: "The Unlicense",
            }
        ]
    },
    {
        type: "input",
        message: "What are your badges for this program? (Please place a comma in after each URL.)",
        name: "badges"
    },
    {
        type: "input",
        message: "What are the features of this project? (If there are more than one feature then comma separate them.)",
        name: "features"
    },
    {
        type: "input",
        message: "How can someone contribute to this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What are some tests for this application?",
        name: "tests"
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(JSON.stringify(answers, null, '  '));
          });
    
}

// Function call to initialize app
init();

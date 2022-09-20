// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { argv } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is you project name?",
        name: "title"
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "build"
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
        message: "What are the steps to install your project? (Please comma separate each step.)",
        name: "install"
    },
    {
        type: "input",
        message: "What are the usage instructions?",
        name: "usage"
    },
    {
        type: "input",
        message: "Do you have screenshots? (If more than one then comma separate them.)",
        name: "screenshots"
    },
    {
        type: "input",
        message: "Were there any collaborators? (If more than one then comma separate them.)",
        name: "collaborators"
    },
    {
        type: "input",
        message: "What were 3rd-party assets used to create this project? (If more than one then comma separate them.)", 
        name: "thirdparty"
    },
    {
        type: "input",
        message: "What tutorial(s) did you use, include URL(s)? (If more than one then comma separate them.)",
        name: "tutorials"
    },
    {
        type: "checkbox",
        message: "Want to add license(s)? (Pick from the list below.)",
        name: "license",
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
        message: "Have badges to add to this project? (If more than one then comma separate them.)",
        name: "badges"
    },
    {
        type: "input",
        message: "What features are included in this project? (If more than one then comma separate them.)",
        name: "features"
    },
    {
        type: "input",
        message: "How can someone contribute to this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can this project be tested?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Markdown File Created!') );
    
}

// TODO: Create a function to initialize app
function init() {
    if (process.argv[2]){
        inquirer
            .prompt(questions)
                .then((answers) => {
                    // console.log(JSON.stringify(answers, null, '  '));

                    if (answers.title === "" || answers.motivation === "" || answers.build === "" || 
                        answers.solve === "" || answers.learn === "" || answers.install === "" || 
                        answers.usage === ""|| answers.license === "") {
                        
                        console.log("Error: A high-quality README includes at least a project title, description(motivation, build, solve, learn questions), installation instructions, usage and license information.")

                    }
                    else writeToFile(process.argv[2], answers);

                });

    }
    else console.log("Error: Filename missing - usage node index.js <filename>")

}

// Function call to initialize app
init();


// answers = {
//         "title": "Weather Tracking",
//         "motivation": "My motivation for writing this application was to design an app that helped track weather patterns.",
//         "build": "I built it because I am regularly find that it is hard to determine the movement of weather.",
//         "solve": "My goal was to solve the weather tracking problem.",
//         "learn": "I learned that API calls from different weather data providers was slow, so I had to generate my own data.",
//         "install": "Dowload from Github, Run weatherApp.py",
//         "usage": "Usage: weatherAppy. -d <datafile>",
//         "screenshots": "image1.png,image2.png",
//         "collaborators": "John Salley <www.github.com/js>,Bill Lambert <www.github.com/bl>,Dennis Rodman <www.github.com/dr>",
//         "thirdparty": "Apache, Bulma",
//         "tutorials": "https://www.github.com/win-will/weatherApp, https://www.github.com/win-will/weatherApp2",
//         "license": ["Apache License 2.0","GNU LGPLv3"],
//         "badges": "https://img.shields.io/github/languages/top/lernantino/badmath",
//         "features": "Feature1, Feature2",
//         "contribute": "You can contribute by forking the project at github and sending pull requests for adding additional features.",
//         "tests": "Run npm test to execute all tests cases."
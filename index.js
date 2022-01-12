//add libraries
const inquirer = require('inquirer');
const fs = require('fs');
const html = require('./utils/generateHTML.js');

//questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'pokemon',
        message: 'What Pokemon would you like to see?',
    }
];

//Set up function to write answers in file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) =>
      err ? console.error(err) : console.log('index.html created!')
    );
 }

//inquire the questions, then put answers in a writeToFile function aimed at the index.html
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            //pass the data into the html js file that was imported 
            writeToFile("index.html", html({...data}));
        });
}

// Function call to initialize app
init();

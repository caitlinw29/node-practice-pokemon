import inquirer from "inquirer";
import fs from 'fs';
import generateHTML from './utils/generateHTML.js';
import fetch from "node-fetch";

//Set up function to write answers in file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) =>
      err ? console.error(err) : console.log('index.html created!')
    );
 }

//inquire asks the question, then put answer in a writeToFile function aimed at the index.html
function init() {
    inquirer
      .prompt([     
        {
          type: 'input',
          name: 'pokemon',
          message: 'What Pokemon would you like to see?',
        }
      ])
      .then((data) => {
            //lowercase for url   
            const pokeName = data.pokemon.toLowerCase(); 
            const pokeAPI = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
            fetch(pokeAPI)
              .then(function (response) {
                if (response.status !== 200) {
                    console.log("That pokemon is not valid");
                }
                return response.json();
              })
              .then(function (data) {
                //switch back to uppercase for displaying the name
                const pokemon = pokeName[0].toUpperCase() + pokeName.substr(1); 
                //pass the data into the html js file that was imported
                writeToFile("index.html", generateHTML({...data}, pokemon)); 
              })
      })
}
// Function call to initialize app
init();


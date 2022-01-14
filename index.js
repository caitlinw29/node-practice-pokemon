//add libraries
// switch to imports for node-fetch
import inquirer from "inquirer";
import fs from 'fs';
import generateHTML from './utils/generateHTML.js';
import fetch from "node-fetch";
import download from 'image-downloader';


//Set up function to write answers in file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) =>
      err ? console.error(err) : console.log('index.html created!')
    );
 }

//inquire the questions, then put answers in a writeToFile function aimed at the index.html
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
            //pass the data into the html js file that was imported 
            writeToFile("index.html", generateHTML({...data})); 
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
                let pokeImage = data.sprites.front_default;
                
                const options = {
                  url: pokeImage,
                  dest: './assets/img/pokeImage.png'     // will be saved as pokeImage.png
                }

                download.image(options)
                  .then(({ filename }) => {
                    console.log('Saved to', filename)  // saved to /path/to/dest/photo
                  })
                  .catch((err) => console.error(err))

              })
      })
}
// Function call to initialize app
init();


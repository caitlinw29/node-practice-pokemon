//generate index.html
function generateHTML(data, pokemon) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>PokePage</title>
      <meta name="description" content="Pokemon page generated with node.js from command line">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/jpg" href="./assets/img/poke-logo.jpg">
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    </head>
    <body class="container text-center">
      <h1 class="display-1">${pokemon}</h1>
      <p>${data.order}</p>
      <img src="${data.sprites.front_default}" class="img-fluid" alt="Your pokemon" id="pokeImage">
    </body>
  </html>
`;
}

//export the markdown so it can be pulled in index.js - default is for imports and exports to match
export default generateHTML;

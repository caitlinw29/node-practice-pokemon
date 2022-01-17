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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body class="container center-align yellow lighten-3">
      <div class="row valign-wrapper">
        <div class="red col s2 white-text"><p>#${data.id}</p></div>
        <h1 class="col s8">${pokemon}</h1>
        <div class="col s2"></div>
      </div>
      <div class="row valign-wraper">
        <img src="${data.sprites.front_default}" class="col s4 offset-s4" alt="${pokemon}">
      </div>
      <div class="row">
        <div class="col s8 offset-s2 red lighten-2">
          <p>Type: ${data.types[0].type.name}</p>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
        </div>
      </div>
      <div class="row">
        <div class="col s4 offset-s2">
          <a class="btn-large red">${data.moves[0].move.name}</a>
        </div>
        <div class="col s4">
          <a class="btn-large red">${data.moves[1].move.name}</a>
        </div>
      </div>
      <div class="row">
        <div class="col s4 offset-s2">
          <a class="btn-large red">${data.moves[2].move.name}</a>
        </div>
        <div class="col s4">
          <a class="btn-large red">${data.moves[3].move.name}</a>
        </div>
      </div>
    </body>
  </html>
`;
}

//export the markdown so it can be pulled in index.js - default is for imports and exports to match
export default generateHTML;

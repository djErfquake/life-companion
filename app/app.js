//includes
const {app} = require('electron').remote;

let chance = new Chance();

//let careers = new Config();
//config.loadFromFile('configs/careers.json');

let players = [];
// load with dummy data
for (let i = 0; i < 8; i++) {
  let name = chance.first();
  players[i] = new Player(name);
  $('.life-playerlist-name-' + i).html(name); // add to side list
  $('.avatar-image-' + i).attr("src", "http://api.adorable.io/avatars/45/" + name);
}

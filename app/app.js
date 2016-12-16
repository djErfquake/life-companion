//includes
const {app} = require('electron').remote;

let chance = new Chance();

//let careers = new Config();
//config.loadFromFile('configs/careers.json');

// initialize variables
let totalTurns = 30, currentTurn = 0, turnsLeft = totalTurns;
let players = [];
let currentPlayer = null;


// load players with dummy data, then bind to rivets
for (let i = 0; i < 8; i++) {
  let name = chance.first();
  let avatar = "http://api.adorable.io/avatars/45/" + name;
  players[i] = new Player(name, avatar);
}
currentPlayer = players[0];


// player click functionality
$('.life-playerTab').click(function() {
  let playerIndex = $(this).index();
  currentPlayer = players[playerIndex];
  $(this).css('background_color', currentPlayer.color);
  console.log("jquery currentPlayer", currentPlayer);
});

let playerClicked = function() {
  let playerIndex = $(this).index();
  currentPlayer = players[playerIndex];
  $(this).css('background_color', currentPlayer.color);
  console.log("rv currentPlayer", currentPlayer);
};


// rivets binding
rivets.bind(document.querySelector('.life-turnsLeft'), {turnsLeft: turnsLeft});
rivets.bind(document.querySelector('.life-currentPlayerName'), {currentPlayer: currentPlayer});
rivets.bind(document.querySelector('.life-playerlist'), {players: players, playerClicked: playerClicked});




// exit button functionality
$('.exit-button').click(function() {
  app.quit();
});

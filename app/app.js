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
let playerClicked = function() {
  let playerIndex = $(this).index();
  currentPlayer = players[playerIndex];
  $('.life-playerTab').children().each(function() {
    $(this).css('background-color', '#efefef');
  });
  $(this).css('background-color', currentPlayer.color);
  console.log("player clicked: ", currentPlayer);
};


// life points add/subtract
$('.life-add-lifepoints').click(function() {
  let lp = parseInt($('#life-input-lifepoints').val());
  console.log("adding " + lp + " lifepoints for " + currentPlayer.name);
  currentPlayer.lifepoints += lp;
});
$('.life-subtract-lifepoints').click(function() {
  let lp = parseInt($('#life-input-lifepoints').val());
  console.log("subtracting " + lp + " lifepoints for " + currentPlayer.name);
  currentPlayer.lifepoints -= lp;
});

// money add/subtract
$('.life-add-money').click(function() {
  let m = parseInt($('#life-input-money').val());
  console.log("adding $" + m + " for " + currentPlayer.name);
  currentPlayer.money += m;
});
$('.life-subtract-money').click(function() {
  let m = parseInt($('#life-input-money').val());
  console.log("subtracting $" + m + " for " + currentPlayer.name);
  currentPlayer.money -= m;
});



// rivets binding
rivets.bind($('.life-playerlist'), {players: players, playerClicked: playerClicked});
rivets.bind($('header'), {currentPlayer: currentPlayer, turnsLeft: turnsLeft});
rivets.bind($('section'), {currentPlayer: currentPlayer});




// exit button functionality
$('.exit-button').click(function() {
  app.quit();
});

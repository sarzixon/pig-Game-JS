/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//Global Variables:
var scores, roundScore, activePlayer, game;


// var playerCurrent = document.querySelector('#current-' + activePlayer).textContent = dice;
startGame();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (game) {
        // 1. Get a random dice number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. show dice img
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. add points if dice is not 1
        if (dice !== 1) {
            document.getElementById('current-' + activePlayer).textContent = roundScore += dice;
        } else {
            nextPlayer();
        }
    }

    // document.getElementById('player-' + activePlayer).classList.add('winner');

})

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    if (scores[activePlayer] >= 20) {
        game = false;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    } else {
        nextPlayer();
    }
})

document.querySelector('.btn-new').addEventListener('click', function () {
    startGame();
})

//switch the player
function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function startGame() {
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    game = true;
}
//start new game button
document.querySelector('.btn-new').addEventListener('click', startGame);
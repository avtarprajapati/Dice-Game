var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
            // 1. random dice
        var dice = Math.ceil(Math.random() * 6);

        // display dice
        var DiceDom = document.querySelector('.dice');
        DiceDom.style.display = 'block'
        DiceDom.src = `./diceImg/dice-${dice}.png`;

        // update score if not equal to 1
        if (dice !== 1) {
            // add roundScore
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore; 
        } else {
            // nextPlayer turn
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',() => {

    if (gamePlaying) {
        score[activePlayer] += roundScore;

        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];

        var winningScore = document.querySelector('.final-score').value;
        
        if (winningScore) {
            winningScore = winningScore
        } else {
            winningScore = 100;
        }

        if (score[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.getElementById(`player-${activePlayer}`).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none'
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        } else {
            nextPlayer();
        }
    }

});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');

    document.querySelector('.dice').style.display = 'none'

}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    // starting player 0 active
    document.querySelector(`.player-0-panel`).classList.add('active');

}
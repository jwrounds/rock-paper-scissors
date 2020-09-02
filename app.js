// imput will ask player for move of either rock, paper, or scissors
    // variable will capture player input
// computer will randomly pick either rock, paper, or scissors
    // variable will hold computer choice
// game will compare player and computer moves
// either player or computer will be declared winner
// win or lose message will alert the player to the computer's move and game result

const playBtn = document.querySelector('#play');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const moves = document.querySelectorAll('.rps');


playBtn.addEventListener('click', (e) => {
    if (playBtn.textContent === 'Play') {
        for (let i = 0; i < moves.length; i++) {
            moves[i].toggleAttribute('hidden');
        }
        playBtn.textContent = 'Cancel';
    } else if (playBtn.textContent === 'Cancel') {
        alert('Game cancelled');
        resetGame();
    }
});

for (let i = 0; i < moves.length; i++) {
    moves[i].addEventListener('click', (e) => {
        scoreGame(e.target.id, computerPlay())
    });
}

function computerPlay () {
    let availableMoves = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * (3 - 1) + 1);
    let computerMove = availableMoves[randomChoice];
    return computerMove;
}

function scoreGame (playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    console.log(playerSelection, computerSelection);
     if (playerSelection === computerSelection) {
        alert(`${playerSelection} ties ${computerSelection}! No one loses! No one wins!`);

     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);

     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);

     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
     }
    resetGame();
}

function resetGame () {

    for (let i = 0; i < moves.length; i++) {
        moves[i].toggleAttribute('hidden');
    }
    playBtn.textContent = 'Play';        
}
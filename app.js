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
        for (let i = 0; i < moves.length; i++) {
            moves[i].toggleAttribute('hidden');
        }
        playBtn.textContent = 'Play';        
    }
});

function playGame () {

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
         return alert(`${playerSelection} ties ${computerSelection}! No one loses! No one wins!`);

     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
         return alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);

     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
         return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);

     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return alert(`You win! ${playerSelection} beats ${computerSelection}!`);

     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
     }
    
}
// imput will ask player for move of either rock, paper, or scissors
    // variable will capture player input
// computer will randomly pick either rock, paper, or scissors
    // variable will hold computer choice
// game will compare player and computer moves
// either player or computer will be declared winner
// win or lose message will alert the player to the computer's move and game result

let playerMove = prompt('Rock, paper, or scissors?');
let validChoice = false;


if (playerMove.toLowerCase() === 'rock' || playerMove.toLowerCase() === 'paper' || playerMove.toLowerCase() === 'scissors') {
    validChoice = true;
}

while (!validChoice) {
    playerMove = prompt('Please pick and type either rock, paper, or scissors, or hit \'esc\' to cancel.');
    if (playerMove === null) {
        alert('Game cancelled');
        validChoice = true;
    } else if (playerMove.toLowerCase() === 'rock' || playerMove.toLowerCase() === 'paper' || playerMove.toLowerCase() === 'scissors') {
        validChoice = true;
    }
}

function computerPlay () {
    let availableMoves = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * (3 - 1) + 1);
    let computerMove = availableMoves[randomChoice];
    return computerMove;
}

// imput will ask player for move of either rock, paper, or scissors
    // variable will capture player input
// computer will randomly pick either rock, paper, or scissors
    // variable will hold computer choice
// game will compare player and computer moves
// either player or computer will be declared winner
// win or lose message will alert the player to the computer's move and game result


function game (rounds) {
    +rounds;

    for (let i = 0; i < rounds; i++) {
    
        let playerMove;
        let validChoice = false;

        while (!validChoice) {
            playerMove = prompt('Please pick and type either rock, paper, or scissors, or hit \'esc\' to cancel.');
            if (playerMove === null) {
                validChoice = true;
                alert('Game cancelled');
            } else if (playerMove.toLowerCase() === 'rock' || playerMove.toLowerCase() === 'paper' || playerMove.toLowerCase() === 'scissors') {
                validChoice = true;
                gameRound(playerMove, computerPlay());
            }
        }
    }
}

function computerPlay () {
    let availableMoves = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * (3 - 1) + 1);
    let computerMove = availableMoves[randomChoice];
    return computerMove;
}

function gameRound (playerSelection, computerSelection) {
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

let gameNumber = prompt('How many rounds would you like to play?');
if (gameNumber === null || isNaN(gameNumber)) {
    alert('Game cancelled');
} else {
    game(gameNumber);
}
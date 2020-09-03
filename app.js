// imput will ask player for move of either rock, paper, or scissors
    // variable will capture player input
// computer will randomly pick either rock, paper, or scissors
    // variable will hold computer choice
// game will compare player and computer moves
// either player or computer will be declared winner
// win or lose message will alert the player to the computer's move and game result

const header = document.querySelector('h1');
const playBtn = document.querySelector('#play');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const moves = document.querySelectorAll('.rps');
const playerScoreDiv = document.querySelector('#player-score .score');
const computerScoreDiv = document.querySelector('#computer-score .score');
let pScore = 0;
let cScore = 0;


playBtn.addEventListener('click', (e) => {
    if (playBtn.textContent === 'Play') {
        for (let i = 0; i < moves.length; i++) {
            moves[i].toggleAttribute('hidden');
        }
        playBtn.textContent = 'Cancel';
    } else if (playBtn.textContent === 'Cancel') {
        alert('Game cancelled');
        header.textContent = 'Rock, Paper, Scissors';
        resetGame();
    }
});

for (let i = 0; i < moves.length; i++) {
    moves[i].addEventListener('click', (e) => {
        playGame(e.target.id.toUpperCase(), computerPlay())
    });
}

function computerPlay () {
    let availableMoves = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomChoice = Math.floor(Math.random() * (3 - 1) + 1);
    let computerMove = availableMoves[randomChoice];
    return computerMove;
}

function playGame (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        header.textContent = `${playerSelection} ties ${computerSelection}! No score!`;

     } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        header.textContent = `${playerSelection} beats ${computerSelection}!`;
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'ROCK' && computerSelection === 'paper') {
        header.textContent = `${computerSelection} beats ${playerSelection}!`;
        cScore += 1;
        computerScoreDiv.textContent = cScore;

     } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        header.textContent = `${playerSelection} beats ${computerSelection}!`;
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        header.textContent = `${computerSelection} beats ${playerSelection}!`;
        cScore += 1;
        computerScoreDiv.textContent = cScore;

     } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        header.textContent = `${playerSelection} beats ${computerSelection}!`;
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        header.textContent = `${computerSelection} beats ${playerSelection}!`;
        cScore += 1;
        computerScoreDiv.textContent = cScore;
     }

     if (cScore === 5) {
        header.textContent = 'Computer wins!';
        resetGame();
     } else if (pScore === 5) {
        header.textContent = 'Player wins!';
        resetGame();
     }

}

function resetGame () {

    for (let i = 0; i < moves.length; i++) {
        moves[i].toggleAttribute('hidden');
    }
    
    playBtn.textContent = 'Play';
    playerScoreDiv.textContent = '0';
    computerScoreDiv.textContent = '0';
    cScore = 0;
    pScore = 0;        
}
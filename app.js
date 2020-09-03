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
        resetGame();
    }
});

for (let i = 0; i < moves.length; i++) {
    moves[i].addEventListener('click', (e) => {
        playGame(e.target.id, computerPlay())
    });
}

function computerPlay () {
    let availableMoves = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * (3 - 1) + 1);
    let computerMove = availableMoves[randomChoice];
    return computerMove;
}

function playGame (playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        alert(`${playerSelection} ties ${computerSelection}! No score!`);

     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert(`${playerSelection} beats ${computerSelection}!`);
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert(`${computerSelection} beats ${playerSelection}!`);
        cScore += 1;
        computerScoreDiv.textContent = cScore;

     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert(`${playerSelection} beats ${computerSelection}!`);
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert(`${computerSelection} beats ${playerSelection}!`);
        cScore += 1;
        computerScoreDiv.textContent = cScore;

     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(`${playerSelection} beats ${computerSelection}!`);
        pScore += 1;
        playerScoreDiv.textContent = pScore;

     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert(`${computerSelection} beats ${playerSelection}!`);
        cScore += 1;
        computerScoreDiv.textContent = cScore;
     }

     if (cScore === 5) {
        alert('Computer wins!')
        resetGame();
     } else if (pScore === 5) {
        alert('Player wins!');
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
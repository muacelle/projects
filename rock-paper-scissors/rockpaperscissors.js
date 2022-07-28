// DOM manipulation

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDiv = document.querySelector('#results');
const pScore = document.querySelector('#pscore');
const cScore = document.querySelector('#cscore');
const final = document.querySelector('#finalResult');

// Events

rockBtn.addEventListener('click', e => {
    singleRound('rock', getComputerChoice());
})

paperBtn.addEventListener('click', e => {
    singleRound('paper', getComputerChoice());
})

scissorsBtn.addEventListener('click', e => {
    singleRound('scissors', getComputerChoice());
})

// Script

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

function singleRound(playerSelection, computerSelection) {
    let result;
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == computerSelection) {
        result = 'Tied!'
    }
    else if (playerChoice == 'rock') {
        if (computerSelection == 'scissors') {
            playerScore += 1;
            result = 'You Win! Rock beats Scissors.';
        }
        else if (computerSelection == 'paper') {
            computerScore += 1;
            result = 'You Loose! Paper beats Rock.';
        }
    } 
    else if (playerChoice == 'paper') {
        if (computerSelection == 'rock') {
            playerScore += 1;
            result = 'You Win! Paper beats Rock.';
        }
        else if (computerSelection == 'scissors') {
            computerScore += 1;
            result = 'You Loose! Scissors beats Paper.';
        }
    } 
    else if (playerChoice == 'scissors') {
        if (computerSelection == 'paper') {
            playerScore += 1;
            result = 'You Win! Scissors beats Paper.';
        }
        else if (computerSelection == 'rock') {
            computerScore += 1;
            result = 'You Loose! Rock beats Scissors.';
        }
    }
    resultDiv.innerText = `Player choice: ${playerChoice}!\nComputer choice: ${computerSelection}! \n\n${result}`;
    pScore.innerText = `Player: ${playerScore}`;
    cScore.innerText = `Computer: ${computerScore}`;

    if (playerScore == 5) {
        final.innerText = `FINAL WINNER: Player!`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        final.innerText = `FINAL WINNER: Computer!`
        playerScore = 0;
        computerScore = 0;
    } else {
        final.innerText = 'First with 5 wins!'
    }
}
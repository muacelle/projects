// DOM manipulation

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDiv = document.querySelector('#results');

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

// script

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function singleRound(playerSelection, computerSelection) {
    let result;
    let score = 0;
    let playerChoice = playerSelection.toLowerCase();
    resultDiv.append(`Player choice: ${playerChoice}!\nComputer choice: ${computerSelection}!`);

    if (playerChoice == computerSelection) {
        result = 'Tied!'
    }
    else if (playerChoice == 'rock') {
        if (computerSelection == 'scissors') {
            score += 1;
            result = 'You Win! Rock beats Scissors.';
        }
        else if (computerSelection == 'paper') {
            score -= 1;
            result = 'You Loose! Paper beats Rock.';
        }
    } 
    else if (playerChoice == 'paper') {
        if (computerSelection == 'rock') {
            score += 1;
            result = 'You Win! Paper beats Rock.';
        }
        else if (computerSelection == 'scissors') {
            score -= 1;
            result = 'You Loose! Scissors beats Paper.';
        }
    } 
    else if (playerChoice == 'scissors') {
        if (computerSelection == 'paper') {
            score += 1;
            result = 'You Win! Scissors beats Paper.';
        }
        else if (computerSelection == 'rock') {
            score -= 1;
            result = 'You Loose! Rock beats Scissors.';
        }
    }
    resultDiv.append(result);
    return score;
}

/*function game() {
    let finalScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}:`)
        playerChoice = prompt("What's your choice?");
        finalScore += singleRound(playerChoice, getComputerChoice());
    }

    let winner;
    if (finalScore > 0) {
        winner = 'Player';
    } else if (finalScore < 0) {
        winner = 'Computer';
    } else {
        winner = "No one! It's a tie.";
    }
    return (`FINAL WINNER: ${winner}!`)
}*/
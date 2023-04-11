choiceArray = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const btns = document.querySelectorAll('button');
const result = document.createElement('p');
const declaration = document.createElement('h2');
const pScoreDisplay = document.createElement('h2');
const cScoreDisplay = document.createElement('h2');


function getComputerChoice() {
    random = Math.floor(Math.random() * choiceArray.length);
    let computerSelection = choiceArray[random];
    computerSelection = computerSelection.toLowerCase()
    return computerSelection;
}

btns.forEach((button) => {
    button.addEventListener('click', playRound);
})

function playRound() {
    playerChoice = this.id;
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        result.textContent = 'it\'s a tie';
        container.appendChild(result);
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        result.textContent = 'you lost; paper beats rock';
        container.appendChild(result);
        ++computerScore;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        result.textContent = 'you lost; scissors beats paper';
        container.appendChild(result);
        ++computerScore;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        result.textContent = 'you lost; rock beats scissors';
        container.appendChild(result);
        ++computerScore;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        result.textContent = 'you won; paper beats rock';
        container.appendChild(result);
        ++playerScore;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        result.textContent = 'you won; scissors beats paper';
        container.appendChild(result);
        ++playerScore;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        result.textContent = 'you won; rock beats scissors';
        container.appendChild(result);
        ++playerScore;
    }
    if (playerScore === 5 || computerScore == 5) {
        declareWinner();
    }
    scoreTally();
    if (playerScore === 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }
    return;

}

function declareWinner () {
    if (playerScore > computerScore) {
        declaration.textContent = 'Player won!';
    } else {
        declaration.textContent = 'Computer won!';
    }
    container.appendChild(declaration);
}

function scoreTally () {
    pScoreDisplay.textContent = 'player score ' + playerScore;
    cScoreDisplay.textContent = 'computer score ' + computerScore;
    container.appendChild(pScoreDisplay);
    container.appendChild(cScoreDisplay);
} 
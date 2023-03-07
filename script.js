choiceArray = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
    random = Math.floor(Math.random() * choiceArray.length);
    let computerSelection = choiceArray[random];
    computerSelection = computerSelection.toLowerCase()
    return computerSelection;
}


let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerChoice = prompt("Rock, paper, scissors?");
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        console.log("draw");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log(`You lost. You used ${playerChoice} and the computer used ${computerChoice}.`);
        computerScore++;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log(`You lost. You used ${playerChoice} and the computer used ${computerChoice}.`);
        computerScore++;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lost. You used ${playerChoice} and the computer used ${computerChoice}.`);
        computerScore++;
    } else {
        console.log(`You won. You used ${playerChoice} and the computer used ${computerChoice}.`);
        playerScore++;
    }
    return;
}

function game() {
    for (let i = 0; i < 5; i++){
    playRound();
    }
    if (playerScore > computerScore) {
        console.log(`The player has won the game by winning ${playerScore} round(s)!`)
    } else if (playerScore > computerScore) {
        console.log(`The computer has won the game by winning ${computerScore} round(s)!`)
    } else {
        console.log(`It is a draw! Both players won ${playerScore} round(s)!`)
    }
    playerScore = 0;
    computerScore = 0;
}

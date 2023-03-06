choiceArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    random = Math.floor(Math.random() * choiceArray.length);
    getComputerChoice = choiceArray[random];
    getComputerChoice = getComputerChoice.toLowerCase()
    return getComputerChoice;
    
}

let playerChoice = prompt("Rock, paper, scissors?");
playerChoice = playerChoice.toLowerCase();
let computerChoice = getComputerChoice();   

function playRound() {
    if (playerChoice == computerChoice) {
        console.log("draw");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("you lost");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("you lost");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("you lost");
    } else {
        console.log("you won");
    }
    return;
}




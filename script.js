

function getComputerChoice() 
{
    let computerChoice;
    let number = Math.random();
    if (number < (1/3)) {
        computerChoice = 'rock';
    } else if (number < (2/3)){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getHumanChoice() 
{
    let humanChoice = prompt("Rock, paper or scissors?")
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    let result;
    if (humanChoice == 'rock' & computerChoice == 'rock') {
        result = "You tied";
    } else if (humanChoice == 'rock' & computerChoice == 'paper') {
        result = "You lose";
        computerScore = + 1;
    } else if (humanChoice == 'rock' & computerChoice == 'scissors') {
        result = "You win";
        humanScore = + 1;
    } else if (humanChoice == 'paper' & computerChoice == 'paper') {
        result = "You tied";
    } else if (humanChoice == 'paper' & computerChoice == 'scissors') {
        result = "You lose";
        computerScore = + 1;
    } else if (humanChoice == 'paper' & computerChoice == 'rock') {
        result = "You win";
        humanScore = + 1;
    } else if (humanChoice == 'scissors' & computerChoice == 'scissors') {
        result = "You tied";
    } else if (humanChoice == 'scissors' & computerChoice == 'rock') {
        result = "You lose";
        computerScore = + 1;
    } else if (humanChoice == 'scissors' & computerChoice == 'paper') {
        result = "You win";
        humanScore = + 1;
    }
    return result;
} 

let humanScore = 0;
let computerScore = 0;

function playGame() {

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let roundResult = playRound(humanSelection, computerSelection);


console.log(computerSelection);
console.log(humanSelection); 
console.log(roundResult);
console.log(humanScore);
console.log(computerScore);
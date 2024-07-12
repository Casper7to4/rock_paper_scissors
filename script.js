

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
        computerScore++;
    } else if (humanChoice == 'rock' & computerChoice == 'scissors') {
        result = "You win";
        humanScore++;
    } else if (humanChoice == 'paper' & computerChoice == 'paper') {
        result = "You tied";
    } else if (humanChoice == 'paper' & computerChoice == 'scissors') {
        result = "You lose";
        computerScore++;
    } else if (humanChoice == 'paper' & computerChoice == 'rock') {
        result = "You win";
        humanScore++;
    } else if (humanChoice == 'scissors' & computerChoice == 'scissors') {
        result = "You tied";
    } else if (humanChoice == 'scissors' & computerChoice == 'rock') {
        result = "You lose";
        computerScore++;
    } else if (humanChoice == 'scissors' & computerChoice == 'paper') {
        result = "You win";
        humanScore++;
    }
    console.log("You chose " + humanChoice);
    console.log("The computer chose " + computerChoice);
    console.log(result);
} 

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();   
    playRound(humanSelection, computerSelection);
    }
    let result;
    if (humanScore > computerScore) {
        result = "You won the match! ";
    }
    else if (humanScore < computerScore) {
        result = "You suck! You lost ";
    }
    else {
        result = "Draw!";
    }
    alert(result);
        

}




let gameResult = playGame()


console.log("Final Score: You - " + humanScore + " Vs Computer " + computerScore);
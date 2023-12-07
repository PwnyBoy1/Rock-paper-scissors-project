//this function should call a random number between 1-3
//Assign 0 to scissors, 1 to rock, 2 to paper
//the function should return the value


var playerInput = prompt("Chose: Rock, Paper, or Scissors").toLowerCase();

function getComputerChoice(){
    compChoice = Math.floor(Math.random()* 3 + 1);
    if (compChoice === 1){
        return "Scissors"
    }
    else if (compChoice === 2){
        return "Rock"
    }
    else {
        return "Paper"
    }
}


//open a prompt window
//have user input their choice: rock, paper, or scissors
//save user's input so we can use it to play against the computer

function gameRound(playerSelection,computerSelection){
    playerSelection = playerInput;
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "Rock"){
        console.log(`You picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        playerSelection;
    }
    else if ((playerSelection === "rock") && computerSelection === "Paper"){
        console.log(`You picked ${playerInput}. Computer picked ${computerSelection}. You lose`);
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
    }
    else if (playerSelection === "paper" && computerSelection === "Paper"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        playerSelection;
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You lose!`);
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You lose!`);
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
    }
    else if (playerSelection ==="scissors" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        playerSelection;
    }
    else
        console.log("Please Try Again")

}
gameRound();
//Rock Paper Scissors Game
const playerInput = promptInput();
const computerChoice = getComputerChoice();

//This function takes in user input and makes it lowercase

function promptInput(){
   return prompt("Chose: Rock, Paper, or Scissors").toLowerCase() 
}

//Rewrote getComputerChoice to use a random index selector. Choices are now an array

function getComputerChoice(){
    const choices = ["rock", "paper","scissors"]
    const randomIndex = Math.floor(Math.random() * choices*length)
    return choices(randomIndex);
}
//This function plays a single round. It checks each individual outcome
//Based on the outcome it console.logs a message including the functions the parameters
// Very long function. It works but there has to be a better way. LOL

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "Rock"){
        console.log(`You picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        return 3
    }
    else if ((playerSelection === "rock") && computerSelection === "Paper"){
        console.log(`You picked ${playerInput}. Computer picked ${computerSelection}. You lose`);
        return 2
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
        return 1
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
        return 1
    }
    else if (playerSelection === "paper" && computerSelection === "Paper"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        return 3
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You lose!`);
        return 2
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You lose!`);
        return 2
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. You win!`);
        return 1
    }
    else if (playerSelection ==="scissors" && computerSelection === "Scissors"){
        console.log(`Player picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
        return 3
    }
    else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        console.log("Please pick a valid options")
    }
    else
        console.log("Please Try Again")

}

function game(){
    if (playRound(playerInput, computerChoice) === 1){
        playerScore ++;
    console.log(`Player picked ${playerInput}. Computer picked ${computerChoice}. You win! Score: Player ${playerScore} and ${computerScore}`);
}
    else if (playRound(playerInput, computerChoice) === 2){
        console.log(`Player picked ${playerInput}. Computer picked ${computerChoice}. You lose! Score: Player ${playerScore} and ${computerScore}`);
        computerScore ++;
    }
    else(console.log(`Player picked ${playerInput}. Computer picked ${computerChoice}. It's a tie! Try again`))
}

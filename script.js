//Rock Paper Scissors Game
const playerInput = promptInput();
const computerChoice = getComputerChoice();


//This function takes in user input and makes it lowercase

function promptInput(){
   return prompt("Chose: Rock, Paper, or Scissors").toLowerCase() 
}
//this function should call a random number between 1-3
//Assign 0 to scissors, 1 to rock, 2 to paper
//the function should return the value

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



//This function plays a single round. It checks each individual outcome
//Based on the outcome it console.logs a message including the functions the parameters
// Very long function. It works but there has to be a better way. LOL

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "Rock"){
        console.log(`You picked ${playerInput}. Computer picked ${computerSelection}. It's a tie! Try again`);
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
    }
    else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        console.log("Please pick a valid options")
    }
    else
        console.log("Please Try Again")

}

playRound(playerInput, computerChoice);
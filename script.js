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

// now the function directly compares both parameters.
// first it checks if a valid selection is made
// then it checks for a tie by playerSelection === computerSelection
// then it checks if the player wins.
// finally computer wins if the firsts conditions aren't met

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (!["rock","paper", "scissors"].includes(playerSelection)){
    return "Please make valid selection. Choose rock, paper, or scissors.";  
}
    if (playerSelection === computerSelection){
        return `It's a tie! Both chose ${playerSelection}. Play again.`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else{
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}
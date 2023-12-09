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


function playRound(playerSelection,computerSelection){

}


//this function should call a random number between 1-3
//Assign 0 to scissors, 1 to rock, 2 to paper
//the function should return the value


let compChoice;

function getComputerChoice(){
    compChoice = Math.floor(Math.random()* 3 + 1);
    if (compChoice === 1){
        compChoice = "Scissors"
    }
    else if (compChoice === 2){
        compChoice = "Rock"
    }
    else {
        compChoice = "Paper"
    }
    console.log(compChoice);
}

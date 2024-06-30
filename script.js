//Rock Paper Scissors Game
const computerChoice = getComputerChoice();

//This function takes in user input and makes it lowercase


//Rewrote getComputerChoice to use a random index selector. Choices are now an array

function getComputerChoice(){
    const choices = ["rock", "paper","scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

// now the function directly compares both parameters.
// first it checks if a valid selection is made
// then it checks for a tie by playerSelection === computerSelection
// then it checks if the player wins.
// finally computer wins if the firsts conditions aren't met

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
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

//select button elements for player choices

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//add event listeners for each of the button choices. 
//When player selects an option, 1 round is played

rockButton.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    resultsViewer.textContent = `${result}`;
})
paperButton.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    resultsViewer.textContent = `${result}`;
})

scissorsButton.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    resultsViewer.textContent = `${result}`;
})




const resultsViewer = document.createElement("p");
const resultsContainer = document.querySelector(".result")

resultsContainer.appendChild(resultsViewer)




//function game() keeps 2 scores and what round it is
//loops the playRound 5 times
//accounts for ties 
/* function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        // Handle ties and replay rounds
        while (result.includes("tie")) {
            playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
            computerSelection = getComputerChoice(); 
            result = playRound(playerSelection, computerSelection);
            console.log(`Round ${round}: ${result}`);
        }
        while (result.includes("valid")) {
            playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
            computerSelection = getComputerChoice(); 
            result = playRound(playerSelection, computerSelection);
            console.log(`Round ${round}: ${result}`);
        }

        // Update scores
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        
       
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log(`You win the game! Final score: ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! Final score: ${playerScore} - ${computerScore}`);
    } else {
        console.log(`It's a tie game! ${playerScore} - ${computerScore}`);
    }
}

game();
*/

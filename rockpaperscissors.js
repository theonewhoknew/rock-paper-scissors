const container = document.createElement("div")
document.body.appendChild(container)
const rockbutton = document.createElement("button")
const paperbutton = document.createElement("button")
const scissorsbutton = document.createElement("button")

container.appendChild(rockbutton)
container.appendChild(paperbutton)
container.appendChild(scissorsbutton)

rockbutton.innerHTML = "ROCK"
paperbutton.innerHTML = "PAPER"
scissorsbutton.innerHTML = "SCISSORS"

let computerSelection 
let playerSelection 
let result

function getComputerChoice() {
    let number = Math.random();
    if ( number < 0.33) {
        computerSelection = "rock"
    }
    else if (number > 0.33 && number < 0.66) {
        computerSelection = "paper"
    }
    else {
        computerSelection = "scissors"
    }
}



function getRock() {
    playerSelection = "rock";
    getComputerChoice();
}
function getPaper() {
    playerSelection = "paper"
    getComputerChoice();
}
function getScissors() {
    playerSelection = "scissors"
    getComputerChoice();
}

function oneRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("Draw!")
    }
    else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats Scissors.")
            result = "user-wins"
            
        }

        else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats Scissors.")
            result = "cpu-wins"
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats Rock.")
            result = "user-wins"
        }

        else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lose! Paper beats Rock.")
            result = "cpu-wins"
        }

        else if (playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beats paper.")
            result = "user-wins"
        }

        else if (playerSelection === "paper" && computerSelection === "scissors") {
            alert("You lose! Scissors beats paper.")
            result = "cpu-wins"
        }

        
    }
}

rockbutton.addEventListener("click", () => {
    getRock();
    oneRound(playerSelection,computerSelection)
    console.log(`User:${playerSelection}; CPU:${computerSelection}`)
});

paperbutton.addEventListener("click", () => {
    getPaper();
    oneRound(playerSelection,computerSelection)
    console.log(`User:${playerSelection}; CPU:${computerSelection}`)
});

scissorsbutton.addEventListener("click", () => {
    getScissors();
    oneRound(playerSelection,computerSelection)
    console.log(`User:${playerSelection}; CPU:${computerSelection}`)
});




/* paperbutton.addEventListener("click", () => playerSelection = "paper");
scissorsbutton.addEventListener("click", () => playerSelection = "scissors");

rockbutton.addEventListener("click", oneRound(playerSelection,getComputerChoice()));
paperbutton.addEventListener("click", oneRound(playerSelection,getComputerChoice()));
scissorsbutton.addEventListener("click", oneRound(playerSelection,getComputerChoice())); */







/*function getUserChoice(playerSelection) {
    if (playerSelection === "rock") {
        return "rock"
    }
    else if (playerSelection === "paper"){
        return "paper"
    }
    else if (playerSelection === "scissors"){
        return "scissors"
    } 
 } */
       



/* let userScore = 0
let cpuScore = 0 */

 /*oneRound(playerSelection,getComputerChoice())
    if (result === "user-wins") {
        console.log("you win")
    }
    else {result === "cpu-wins";
        console.log("cpu wins")
    }   */
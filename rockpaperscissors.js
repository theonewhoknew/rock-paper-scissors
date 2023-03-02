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




function getComputerChoice() {
    let number = Math.random();
    if ( number < 0.33) {
        return "rock"
    }
    else if (number > 0.33 && number < 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
let choice 

function getUserChoice(playerSelection) {
    if (playerSelection === "rock") {
        return "rock"
    }
    else if (playerSelection === "paper"){
        return "paper"
    }
    else if (playerSelection === "scissors"){
        return "scissors"
    } 
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

let result
let userScore = 0
let cpuScore = 0

 oneRound(getUserChoice(),getComputerChoice())
 if (result === "user-wins") {
        ++userScore;
 }
 else {result === "cpu-wins";
    ++cpuScore;
    }
    
     
rockbutton.addEventListener("click", (console.log("Rock")))  ;






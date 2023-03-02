const container = document.createElement("div")
document.body.appendChild(container)
const rockbutton = document.createElement("button")
const paperbutton = document.createElement("button")
const scissorsbutton = document.createElement("button")
const buttons = document.querySelectorAll("button")

container.appendChild(rockbutton)
container.appendChild(paperbutton)
container.appendChild(scissorsbutton)

rockbutton.innerHTML = "ROCK"
paperbutton.innerHTML = "PAPER"
scissorsbutton.innerHTML = "SCISSORS"

buttons.style.width = "200px";
buttons.style.height = "200px";







 



 


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
function getUserChoice() {
    if (choice === "rock") {
        return "rock"
    }
    else if (choice === "paper"){
        return "paper"
    }
    else if (choice === "scissors"){
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
    
     
console.log(rockbutton.addEventListener("click", ))




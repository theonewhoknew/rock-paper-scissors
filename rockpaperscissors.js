console.log("Hello,World!")

let choices = ["rock","paper", "scissors"]

function getComputerChoice() {
    let number = Math.random();
    console.log(number)
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

function getUserChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
     return;
        }
        else {
            alert("answer not valid")
        }
    }





function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("Draw!")
    }
    else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats Scissors.")
        }

        else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats Scissors.")
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats Rock.")
        }

        else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lose! Paper beats Rock.")
        }

        else if (playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beats paper.")
        }

        else if (playerSelection === "paper" && computerSelection === "scissors") {
            alert("You lose! Scissors beats paper.")
        }

        
    }
}
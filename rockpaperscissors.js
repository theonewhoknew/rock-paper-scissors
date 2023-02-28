console.log("Hello,World!")

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
    for (choice; choice != "rock" || choice != "paper" || choice != "scissors";) {
    choice = prompt("Rock, Paper or Scissors?")
    choice = choice.toLowerCase();

    if (choice === "rock") {
        return "rock"
    }
    else if (choice === "paper"){
        return "paper"
    }
    else if (choice === "scissors"){
        return "scissors"
    }

        else {
            alert("answer not valid")
        }
    }
    }
    
function game(playerSelection, computerSelection){
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

for(let i = 0; i < 5; i++) {
 game(getUserChoice(),getComputerChoice())
 if (result === "user-wins") {
    console.log("User Score "+(++userScore))
 }
 else if (result === "cpu-wins") {
    console.log("CPU Score "+(++cpuScore))
 }

 else {}
}

if (userScore > cpuScore) {
    console.log("You won the game!")
}
    else if (userScore === cpuScore) {
    console.log ("There is no winner!")
}
    else {
    console.log("You lost the game!")
}


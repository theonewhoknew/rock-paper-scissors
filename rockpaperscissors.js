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
    
function game(playerSelection, computerSelection){
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
for(let i = 0; i < 5; i++) {
 game(getUserChoice(),getComputerChoice())
}



const container = document.createElement("div")
container.classList.add("container")
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

const scorecontainer = document.createElement("div") 
document.body.appendChild(scorecontainer)
const userScore = document.createElement("div")
scorecontainer.appendChild(userScore)
const computerScore = document.createElement("div")
scorecontainer.appendChild(computerScore)
const rounds = document.createElement("div")
scorecontainer.insertBefore(rounds, computerScore)
scorecontainer.classList.add("scorecontainer")
const resultcontainer = document.createElement("div")
document.body.appendChild(resultcontainer)
resultcontainer.classList.add("resultcontainer")






function showResult (text) {
    resultcontainer.innerHTML = text
}

let userScoreNum = 0
let computerScoreNum = 0
let roundsPlayed = 0

computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`
userScore.innerHTML = `USER SCORE: ${userScoreNum}`
rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`


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
        alert("Draw!");
        roundsPlayed += 1;
        rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
    }
    
        else {
                
            if (playerSelection === "rock" && computerSelection === "scissors") {
                alert("You win! Rock beats Scissors.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;

                    
            }

            else if (playerSelection === "scissors" && computerSelection === "rock") {
                alert("You lose! Rock beats Scissors.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
                
            }

            else if (playerSelection === "paper" && computerSelection === "rock") {
                alert("You win! Paper beats Rock.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;
                    
                    
            }

            else if (playerSelection === "rock" && computerSelection === "paper") {
                alert("You lose! Paper beats Rock.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
            }

            else if (playerSelection === "scissors" && computerSelection === "paper") {
                alert("You win! Scissors beats paper.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;
            }

            else if (playerSelection === "paper" && computerSelection === "scissors") {
                alert("You lose! Scissors beats paper.");
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
            }      
        }
    if (roundsPlayed === 5) {
        if (userScoreNum > computerScoreNum) {
            showResult("You win!")
        }

        else if (userScoreNum === computerScoreNum) {
            showResult("It's a draw!")
        }

        else {
            showResult("You lose!")
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
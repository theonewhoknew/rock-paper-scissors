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

const scoreContainer = document.createElement("div") 
document.body.appendChild(scoreContainer)
const userScore = document.createElement("div")
scoreContainer.appendChild(userScore)
const computerScore = document.createElement("div")
scoreContainer.appendChild(computerScore)
const rounds = document.createElement("div")
scoreContainer.insertBefore(rounds, computerScore)
scoreContainer.classList.add("scorecontainer")
const resultcontainer = document.createElement("div")
document.body.appendChild(resultcontainer)
resultcontainer.classList.add("resultcontainer")

const choiceContainer = document.createElement ("div")
document.body.insertBefore(choiceContainer, scoreContainer)
choiceContainer.style.display = "flex"
choiceContainer.style.justifyContent = "space-between"
choiceContainer.style.padding = "80px"
const userChoice = document.createElement ("div")
choiceContainer.appendChild (userChoice)
userChoice.innerHTML = ""
const verdict = document.createElement ("div")
choiceContainer.appendChild(verdict)
const cpuChoice = document.createElement ("div")
choiceContainer.appendChild (cpuChoice)
cpuChoice.innerHTML = ""



const resetcontainer = document.createElement ("div")
document.body.appendChild(resetcontainer)
const resetbutton = document.createElement("button")
resetcontainer.appendChild(resetbutton)
resetcontainer.style.display = "flex"
resetcontainer.style.justifyContent = "flex-end"
resetbutton.innerHTML = "RESET"
resetbutton.style.display = "none"





function showResult (text) {
    verdict.innerHTML = text
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
        computerSelection = "Rock"
    }
    else if (number > 0.33 && number < 0.66) {
        computerSelection = "Paper"
    }
    else {
        computerSelection = "Scissors"
    }
}



function getRock() {
    playerSelection = "Rock";
    getComputerChoice();
}
function getPaper() {
    playerSelection = "Paper"
    getComputerChoice();
}
function getScissors() {
    playerSelection = "Scissors"
    getComputerChoice();
}

function oneRound(playerSelection, computerSelection){
    userChoice.style.color = "black"
    cpuChoice.style.color = "black"

  
    if (playerSelection === computerSelection){
        userChoice.innerHTML = `${playerSelection}`;
        userChoice.style.color = "orange"
        cpuChoice.innerHTML = `${computerSelection}`;
        cpuChoice.style.color = "orange"
        roundsPlayed += 1;
        rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
    }
    
        else {
                
            if (playerSelection === "Rock" && computerSelection === "Scissors") {
                userChoice.innerHTML = "Rock";
                userChoice.style.color = "green"
                cpuChoice.innerHTML = "Scissors";
                cpuChoice.style.color = "red"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;

                    
            }

            else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                
                userChoice.innerHTML = "Scissors";
                userChoice.style.color = "red"
                cpuChoice.innerHTML = "Rock";
                cpuChoice.style.color = "green"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
                
            }

            else if (playerSelection === "Paper" && computerSelection === "Rock") {
               
                userChoice.innerHTML = "Paper";
                userChoice.style.color = "green"
                cpuChoice.innerHTML = "Rock";
                cpuChoice.style.color = "red"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;
                    
                    
            }

            else if (playerSelection === "Rock" && computerSelection === "Paper") {
               
                userChoice.innerHTML = "Rock";
                userChoice.style.color = "red"
                cpuChoice.innerHTML = "Paper";
                cpuChoice.style.color = "green"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
            }

            else if (playerSelection === "Scissors" && computerSelection === "Paper") {
               
                userChoice.innerHTML = "Scissors";
                userChoice.style.color = "green"
                cpuChoice.innerHTML = "Paper";
                cpuChoice.style.color = "red"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                userScoreNum += 1;
                userScore.innerHTML = `USER SCORE: ${userScoreNum}`;
            }

            else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                
                userChoice.innerHTML = "Paper";
                userChoice.style.color = "red"
                cpuChoice.innerHTML = "Scissors";
                cpuChoice.style.color = "green"
                roundsPlayed += 1;
                rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
                computerScoreNum += 1;
                computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
            }      
        }
    if (roundsPlayed === 5) {
    
    
        if (userScoreNum > computerScoreNum) {
            showResult("You win! The Game is over!")
        }

        else if (userScoreNum === computerScoreNum) {
            showResult("It's a draw! The Game is over!")
        }

        else {
            showResult("You lose! The Game is Over!");
        } 

    resetbutton.style.display = "initial"
    }
}

function resetGame () {
    roundsPlayed = 0;
    computerScoreNum = 0;
    userScoreNum = 0;
    rounds.innerHTML = `ROUNDS PLAYED: ${roundsPlayed}`;
    userScore.innerHTML = `USER SCORE: ${userScoreNum}`;
    computerScore.innerHTML = `CPU SCORE: ${computerScoreNum}`;
    resetbutton.style.display = "none"
    resultcontainer.innerHTML = ""
    verdict.innerHTML = ""
    cpuChoice.innerHTML = ""
    userChoice.innerHTML = ""
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

resetbutton.addEventListener("click", () => {
    resetGame();

})




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
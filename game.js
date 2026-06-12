console.log("==========Welcome to the Rock Paper Scissors Game==========");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const result = Math.floor(Math.random() * 3);
  return choices[result];
}

function getHumanChoice() {
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));
}

function displayLiveScores() {
  const yourScoreboard = document.querySelector(".your-score");
  const computerScoreboard = document.querySelector(".computer-score");
  yourScoreboard.textContent = humanScore;
  computerScoreboard.textContent = computerScore;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const info = document.querySelector(".info");
  if (humanChoice === "paper" && computerChoice === "rock") {
    info.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    info.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    info.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    info.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    info.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    info.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    info.textContent = `Draw, this round! ${computerChoice} is same as ${humanChoice}`;
  }

  if (humanScore === 5) {
    info.textContent = "You win the game!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    info.textContent = "You lose the game!";
    humanScore = 0;
    computerScore = 0;
  }
  displayLiveScores();
}

getHumanChoice();

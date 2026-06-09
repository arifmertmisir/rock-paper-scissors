console.log("==========Welcome to the Rock Paper Scissors Game==========");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const result = Math.floor(Math.random() * 3);
  return choices[result];
}

function getHumanChoice() {
  const userChoice = prompt(
    "Please enter your choice (rock, paper, scissors):",
  );
  return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(
      `Draw, this round! ${computerChoice} is same as ${humanChoice}`,
    );
  }
}

function pickSelections() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);
    pickSelections();
  }
  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You won the game!\nYour score: ${humanScore}\n Computer's score: ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost the game!\nYour score: ${humanScore}\n Computer's score: ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie!\nYour score: ${humanScore}\n Computer's score: ${computerScore}`,
    );
  }
}

playGame();

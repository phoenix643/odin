// Step 4: Score variables in global scope
let humanScore = 0;
let computerScore = 0;

// Step 2: Function to get computer's choice
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Function to get human player's choice
function getHumanChoice() {
  const choice = console.log("Rock, Paper, or Scissors?");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  btn1.addEventListener("click", () =>  {playRound("rock", getComputerChoice())});
  btn2.addEventListener("click", () => {playRound("paper", getComputerChoice())});
  btn3.addEventListener("click",() => {playRound("scissors", getComputerChoice())});
}

// Step 5: Function to play one round
function playRound(humanChoice, computerChoice) {
  const player = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (player === computer) {
    console.log("It's a tie!");
    return;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${player} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${player}`);
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

// Run one round
getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

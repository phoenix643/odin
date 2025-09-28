// // Step 4: Score variables in global scope
// let humanScore = 0;
// let computerScore = 0;

// // Step 2: Function to get computer's choice
// function getComputerChoice() {
//   const randomNumber = Math.random();

//   if (randomNumber < 0.33) {
//     return "rock";
//   } else if (randomNumber < 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// // Step 3: Function to get human player's choice
// function getHumanChoice() {
//   const choice = console.log("Rock, Paper, or Scissors?");
//   const btn1 = document.querySelector(".btn1");
//   const btn2 = document.querySelector(".btn2");
//   const btn3 = document.querySelector(".btn3");
//   btn1.addEventListener("click", () =>  {playRound("rock", getComputerChoice())});
//   btn2.addEventListener("click", () => {playRound("paper", getComputerChoice())});
//   btn3.addEventListener("click",() => {playRound("scissors", getComputerChoice())});
// }

// // Step 5: Function to play one round
// function playRound(humanChoice, computerChoice) {
//   const player = humanChoice.toLowerCase();
//   const computer = computerChoice.toLowerCase();

//   if (player === computer) {
//     console.log("It's a tie!");
//     return;
//   }

//   if (
//     (player === "rock" && computer === "scissors") ||
//     (player === "paper" && computer === "rock") ||
//     (player === "scissors" && computer === "paper")
//   ) {
//     humanScore++;
//     console.log(`You win! ${player} beats ${computer}`);
//   } else {
//     computerScore++;
//     console.log(`You lose! ${computer} beats ${player}`);
//   }

//   console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
// }

// // Run one round
// getHumanChoice();
// let hi = True
// // const computerSelection = getComputerChoice();

// // playRound(humanSelection, computerSelection)
// // streak comment(ignore)

let style = document.createElement('style');
style.innerHTML = `
  .div_child {
    transition: background-color 0.3s ease; /* Smooth transition for color change */
  }

  .div_child:hover {
    background-color: red; /* Change this to any color you like */
  }
`;

flex_container = document.createElement("div");
flex_container.classList.add("flex_container");

flex_container.style.width = "100%";
flex_container.style.height = "100vh";
flex_container.style.display = "flex";
flex_container.style.flexWrap = "wrap";
flex_container.style.flexDirection = "row"

for(let i = 0; i < 10; i++){
  let div_container = document.createElement('div');
  div_container.style.display = "flex";
  div_container.classList.add("div_container");
  // div_container.style.flex = "0 1 100%";
  div_container.style.width = "100%";
  div_container.style.flexDirection = "row"
  flex_container.appendChild(div_container);
  
  for(let j = 0; j < 4; j++){
    let div_child = document.createElement('div');
    div_child.classList.add("div_child");
    div_child.style.display = "flex";
    div_child.style.height = "100%";
    div_child.style.margin = "5px";

    div_child.style.flex = "1 1 25%";
    div_child.style.border = "2px solid black";
    div_child.addEventListener('mouseenter', function() {
      div_child.style.backgroundColor = 'red'; // Change color on hover
    });

    // Add mouseout event to reset color
    div_child.addEventListener('mouseleave', function() {
      div_child.style.backgroundColor = ''; // Reset the background color
    });
    div_container.appendChild(div_child);
  }
}

document.body.appendChild(flex_container);







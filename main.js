let playerPoints = 0;
let computerPoints = 0;
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  const randomNum = randomInteger(1, 3);
  switch (randomNum) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default:
      break;
  }
}

function playRound(playerSelection, computerChoice) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      switch (computerChoice.toLowerCase()) {
        case "scissors":
          playerPoints++;
          alert(
            `You win! ${playerSelection.toLowerCase()} beats ${computerChoice.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "paper":
          computerPoints++;
          alert(
            `You lose! ${computerChoice.toLowerCase()} beats ${playerSelection.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "rock":
          alert(
            `It's a draw! You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
      }
      break;
    case "scissors":
      switch (computerChoice.toLowerCase()) {
        case "paper":
          playerPoints++;
          alert(
            `You win! ${playerSelection.toLowerCase()} beats ${computerChoice.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "rock":
          computerPoints++;
          alert(
            `You lose! ${computerChoice.toLowerCase()} beats ${playerSelection.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "scissors":
          alert(
            `It's a draw! You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
      }
      break;
    case "paper":
      switch (computerChoice.toLowerCase()) {
        case "rock":
          playerPoints++;
          alert(
            `You win! ${playerSelection.toLowerCase()} beats ${computerChoice.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "scissors":
          computerPoints++;
          alert(
            `You lose! ${computerChoice.toLowerCase()} beats ${playerSelection.toLowerCase()}. You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
        case "paper":
          alert(
            `It's a draw! You: ${playerPoints} - Computer: ${computerPoints}`
          );
          break;
      }
      break;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let computerChoice = getComputerChoice();
    let userInput = prompt("Enter: Rock, Paper or Scissors").toLowerCase();
    playRound(userInput, computerChoice);
  }
  if (playerPoints > computerPoints) {
    alert(
      `YOU WON!!! Your Points: ${playerPoints} - Computer Points: ${computerPoints}`
    );
    playerPoints = 0;
  } else if (playerPoints < computerPoints) {
    alert(
      `YOU LOST :( Your Points: ${playerPoints} - Computer Points: ${computerPoints}`
    );
    computerPoints = 0;
  } else {
    alert(
      `WE HAVE A DRAW!!! Your Points: ${playerPoints} - Computer Points: ${computerPoints}`
    );
    playerPoints = 0;
    computerPoints = 0;
  }
}

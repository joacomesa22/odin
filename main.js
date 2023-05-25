const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const display = document.querySelector("#display");
const playerScorer = document.querySelector("#playerPoints");
const cpuScorer = document.querySelector("#cpuPoints");

let playerPoints = 0;
let computerPoints = 0;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() {
  const randomNum = randomInteger(1, 3);
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      break;
  }
}

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function playRound(playerSelection, computerChoice) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "scissors":
          playerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You won! - ROCK beats SCISSORS</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "paper":
          computerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You lost! - PAPER beats ROCK</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "rock":
          display.innerHTML = "";
          display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>IT'S A DRAW!</h3></div>`;
          setTimeout(() => {
            display.innerHTML = "";
          }, 2000);
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "paper":
          playerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You won! - SCISSORS beats PAPER</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "rock":
          computerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You lost! - ROCK beats SCISSORS</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "scissors":
          display.innerHTML = "";
          display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>IT'S A DRAW</h3></div>`;
          setTimeout(() => {
            display.innerHTML = "";
          }, 2000);
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          playerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You won! - PAPER beats ROCK</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "scissors":
          computerPoints++;
          if (playerPoints < 5 && computerPoints < 5) {
            playerScorer.innerText = playerPoints;
            cpuScorer.innerText = computerPoints;
            display.innerHTML = "";
            display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>You lost! - SCISSORS beats PAPER</h3></div>`;
            setTimeout(() => {
              display.innerHTML = "";
            }, 2000);
          }
          if (playerPoints >= 5) {
            endGame("Player");
          } else if (computerPoints >= 5) {
            endGame("CPU");
          }
          break;
        case "paper":
          display.innerHTML = "";
          display.innerHTML = `<div class="roundResult"><h2>CPU CHOSE ${computerChoice}</h2> <h3>IT'S A DRAW</h3></div>`;
          setTimeout(() => {
            display.innerHTML = "";
          }, 2000);
          break;
      }
      break;
  }
}

function endGame(result) {
  playerScorer.innerText = 0;
  cpuScorer.innerText = 0;
  display.innerHTML = "";
  display.innerHTML = `<div class="results"><h2> ${result} Wins!!!!</h2> <button class="restartBtn" onclick="restartGame()">Restart Game</button></div>`;
}

function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  display.innerHTML = "";
}

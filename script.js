"use strict";
//  NOTE:
// When styling using javascript, when the css syntax is two words, you use the camelcase
// Example: CSS SYNTAX: background-color || JS SYNTAX: backgroundColor.

// Function of getting the Value
// const valueGetter = function () {
//   const guess = Number(document.querySelector(".guessNum").value);
//   let currScore = Number(document.querySelector(".score").textContent);
//   console.log(currScore);
//   console.log(guess);

//   if (guess === randomNum) {
//     document.querySelector(".announcement").textContent = "Correct";
//   } else if (guess !== randomNum) {
//     newScore = currScore - 1;
//     currScore -= 1;
//   }
// };

// Function for displaying message
const displayMessage = function (message) {
  document.querySelector(".announcement").textContent = message;
};

let randomNum = Math.trunc(Math.random() * 20) + 1;
let currentAnn = "";
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessNum").value);

  // When player doesn't enter a number
  if (guess === 0) {
    displayMessage("🙏 Enter a number! ");
  }

  // When the guess number is less than the random number
  if (guess < randomNum && guess !== 0) {
    displayMessage("📉 Too Low");
  }

  // When the guess number is greater than the random number
  if (guess > randomNum) {
    displayMessage("📈 Too High");
  }

  // When the guess number is correct
  if (guess === randomNum) {
    // currentAnn = document.querySelector(".announcement").textContent =
    //   "🥳🎊Correct Number!";
    displayMessage("🥳🎊Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.width = "30rem";
    document.querySelector(".guess").style.left = "42.5%";
    document.querySelector(".guess").textContent = randomNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }

  // When the guess number is wrong
  if (guess !== randomNum && guess !== 0 && score > 0) {
    score--;
    document.querySelector(".score").textContent = score;
  }

  // When the high score is greater than current score

  // When the score reach zero(0)
  if (score <= 0) {
    displayMessage("💀 Game Over!");
  }
});

// Again Button
document.querySelector(".play-again").addEventListener("click", function () {
  let newHigh = 0;

  // Reset everything
  randomNum = Math.trunc(Math.random() * 2) + 1;
  document.querySelector(".guessNum").value = "";
  currentAnn = document.querySelector(".announcement").textContent =
    "Start guessing...";
  score = document.querySelector(".score").textContent = Number("20");
  document.querySelector(".guess").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.width = "15rem";
  document.querySelector(".guess").style.left = "46.5%";
});

"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  if (!guess) {
    displayMessage("⛔ Please enter a number ");
  } else if (guess === number) {
    document.querySelector(".overlay").classList.remove("hide");
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score === 20) {
      document.querySelector(".win-message").textContent =
        "You guessed very quickly and reached maximum highscore well played 🎉 now i am reseting everything try to do it again";
    }
    document.querySelector(".win-modal").classList.remove("hide");
    document.querySelector(".back-col").classList.remove("hide");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hide");
  document.querySelector(".back-col").classList.add("hide");
});
document.querySelector(".close-iconW").addEventListener("click", function () {
  console.log(highScore);
  if (highScore === 20) {
    location.reload();
  }
  document.querySelector(".win-modal").classList.add("hide");
  document.querySelector(".back-col").classList.add("hide");
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".overlay").classList.add("hide");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing. . .");
  document.querySelector(".guess").value = "";
});

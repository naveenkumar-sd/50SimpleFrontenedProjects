
const startBtn = document.querySelector(".btn");
const bigContainer = document.querySelector(".big-container");
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".result-container");
const hands = document.querySelectorAll(".hands");
const scores = document.getElementById("scores");
const exitBtn = document.getElementById("exit-btn");

// Result elements
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
const playerText = document.getElementById("player-text");
const computerText = document.getElementById("computer-text");

// Start game (hide selection area)
startBtn.addEventListener("click", () => {
    container.classList.add("active");
    scores.classList.add("active");
    resultContainer.style.display = "block";
});

exitBtn.addEventListener("click", () => {
    container.classList.remove("active");
    scores.classList.remove("active");
    resultContainer.style.display = "none";
    
});





const startBtn = document.querySelector(".btn");
const bigContainer = document.querySelector(".big-container");
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".result-container");
const weapons = document.querySelectorAll(".weapons");
const hands = document.querySelectorAll(".hands");
const scores = document.getElementById("scores");
const exitBtn = document.getElementById("exit-btn");
const resultBox = document.querySelector(".result-box");

// Result elements
const yourChoice = document.querySelector(".your-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
const playerText = document.getElementById("player-text");
const computerText = document.getElementById("computer-text");
const won = document.getElementById("won");
const loss = document.getElementById("loss");   
const draw = document.getElementById("draw");

console.log(draw);
console.log(draw.lastElementChild.innerText);


let val = 0;


//weapons array
hands.forEach((hand) => {
    hand.addEventListener("click", () => {
        
        val = 1;
        //for your choice
        const userindex = Array.from(hands).indexOf(hand);
        const userchoice = hand.querySelector("img").src;
        yourChoice.querySelector("img").src = userchoice;
        
        //for computer choice
        randomIndex = Math.floor(Math.random()*hands.length);
        ComputerChoice(randomIndex);

        setTimeout(() => {
            scoring(userindex, randomIndex);
        }, 3000);
        
        
    })
})



function ComputerChoice(index) {
    const computerpick = hands[randomIndex].querySelector("img").src;
    computerChoice.querySelector("img").src = computerpick;
}




// Start game (hide selection area)
startBtn.addEventListener("click", () => {
    
    if (val===1){
        container.classList.add("active");
        scores.classList.add("active");
        resultContainer.style.display = "block";
        setTimeout(() => {
        resultBox.classList.add("active");
        }, 100);

        val=0;

    }else{
        alert("Please select a weapon to start the game!");
    }
   
   

});


function scoring(user, computer) {

    console.log("User: " + user + ", Computer: " + computer);

    if(user === computer){
        draw.lastElementChild.innerText = parseInt(draw.lastElementChild.innerText) + 1;
    }else if(user === 0 && computer === 2 ){
        won.lastElementChild.innerText = parseInt(won.lastElementChild.innerText) + 1;
    }else if(computer === 0 && user === 2){
        loss.lastElementChild.innerText = parseInt(loss.lastElementChild.innerText) + 1;
    }else if(user < computer){
        loss.lastElementChild.innerText = parseInt(loss.lastElementChild.innerText) + 1;
    }else{
        won.lastElementChild.innerText = parseInt(won.lastElementChild.innerText) + 1;
    }

}

exitBtn.addEventListener("click", () => {
    container.classList.remove("active");
    scores.classList.remove("active");
    resultContainer.style.display = "none";
    resultBox.classList.remove("active");
    
});







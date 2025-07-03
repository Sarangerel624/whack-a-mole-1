const gameContainer = document.getElementById("game-container");
const startBtn = document.getElementById("startBtn");
const molescore = document.getElementById("score");
const moleTimer = document.getElementById("time")
const restartBtn = document.getElementById("restartBtn")
let previousHoleId = null;
let timer = 30;
let score = 0;
let gameInterval = null;
let timeInterval = null;
function setUpGame() {
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("holes");
    hole.id = i.toString();
    const mole = document.createElement("div");
    mole.classList.add("moles");
    mole.style.display = "none";
    gameContainer.appendChild(hole);
    hole.appendChild(mole);
    mole.addEventListener("mousedown", function(){
            score++;
            molescore.textContent = score;
            hiddMole()
    })
  }
}

function randomNum() {
  hiddMole();
  console.log(previousHoleId, "omnoh nuh");
  const randomIndex = Math.floor(Math.random() * 9);
  console.log(randomIndex, "odoogin nuh");
  
  const currentHole = document.getElementById(randomIndex);
  console.log(currentHole);

  const currentMole = currentHole.querySelector(".moles");
  console.log(currentMole);
  currentMole.style.display = "block";
  previousHoleId = randomIndex;
}

function timeLeft () {
    if (timer <= 0) {
        score = 0;
        molescore.innerHTML = score;
        timer = 0; 
        moleTimer.innerHTML = timer;
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        hideMoles();
        alert("Your score is " + score);
        return;
    }
    timer--;
    moleTimer.innerHTML = timer;

}

function hideMoles () {
    const prevHole = document.getElementById(previousHoleId);
    const prevMole = prevHole.querySelector(".moles");
    prevMole.style.display = "none"
   
}



function hiddMole() {
  if (previousHoleId !== null) {
    const prevHole = document.getElementById(previousHoleId);
    const prevMole = prevHole.querySelector(".moles");
    prevMole.style.display = "none"
  };
}



startBtn.addEventListener("click", function() {
     clearInterval(gameInterval);
    clearInterval(timeInterval);
    timer = 30;  
    score = 0; 
    molescore.textContent = score;
    moleTimer.textContent = timer;

    gameInterval = setInterval(randomNum, 800);
    timeInterval = setInterval(timeLeft, 1000);
});

restartBtn.addEventListener("click", function(){
   clearInterval(gameInterval);
    clearInterval(timeInterval);
    timer = 30; 
    score = 0;  
    molescore.textContent = score;
    moleTimer.textContent = timer;

    gameInterval = setInterval(randomNum, 800);
    timeInterval = setInterval(timeLeft, 1000);
})


window.onload = setUpGame;

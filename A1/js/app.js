//variables
//buttons
let button0 = document.getElementById("button0");

//texts
let playerRollText = document.getElementById("playerRollText");
let playerComputerText= document.getElementById("playerComputerText");
let resultOfComputer = document.getElementById("resultOfComputer");
let resultText = document.getElementById("score");

//data
let playerRoll = 0;
let computerRoll = 0;

let playerResult = 0;
let computerResult =0;
let drawResult =0;

//processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  resultOfRoll();
  showPlayerRollResult();
  showComputerRollResult();
  showText();
});


//controllers
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixForComputer() {
  computerRoll = Math.floor(Math.random() * 6) + 1;
}

function resultOfRoll() {
  if(playerRoll > computerRoll){
    computerResult ++;
    showResult("Computer Wins!");
  }
  else if (playerRoll < computerRoll){
    playerResult++;
    showResult("Player Wins!");
  }
  else if (playerRoll === computerRoll) {
    drawResult ++;
    showResult("It's a draw");
  }
}

//VIEWS
function showPlayerRollResult(){
  playerRollText.innerHTML = playerRoll;
}

function showComputerRollResult(){
  playerComputerText.innerHTML = computerRoll;
}

function showResult(text) {
  resultOfComputer.innerHTML = text;
}

function showText(){
  resultText.innerHTML = "Win: " + playerResult + " Lose: " + computerResult + " Draw: " + drawResult;
}




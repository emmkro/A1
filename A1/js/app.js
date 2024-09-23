//variables
//buttons
let button0 = document.getElementById("button0");

//texts
let playerRollText = document.getElementById("playerRollText");
let playerComputerText= document.getElementById("playerComputerText");
let resultOfComputer = document.getElementById("resultOfComputer");
let playerScoreText = document.getElementById("playerScore");
let computerScoreText = document.getElementById("computerScore");
//data
let playerRoll = 0;
let computerRoll = 0;
let playerScore = 0;
let computerScore = 0;

//processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForComputer();
  showComputerRollResult();
  resultOfRoll();
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
    showResult("Computer Wins!");
  }
  else if (playerRoll< computerRoll){
    showResult("Player Wins!");
  }
  else if (playerRoll === computerRoll){
    showResult("It's a tie");
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



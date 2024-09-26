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

loadGame();
showText ();
//processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  resultOfRoll();
  showPlayerRollResult();
  showComputerRollResult();
  showText();
  saveAsCookie();

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
  resultText.innerHTML = "Player Wins:  " + playerResult + " Computer Wins:  " + computerResult + " Draw: " + drawResult;
}

//COOKIE
function saveAsCookie(){
  document.cookie = "playerScore=" + playerResult + "; expires = Thu, 18 Dec 2064 12:00:00 UTC";
  document.cookie = "computerScore=" + computerResult + "; expires = Thu, 18 Dec 2064 12:00:00 UTC";
  document.cookie = "drawResult=" + drawResult + "; expires = Thu, 18 Dec 2064 12:00:00 UTC";
  console.log (" ")

}

function loadGame (){
  playerResult = getCookie ("playerScore");
  computerResult = getCookie ("computerScore");
  drawResult = getCookie ("drawResult");

}

function getCookie(cname){
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i<ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
    return 0;
}

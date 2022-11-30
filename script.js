let scoreNum = 0;
document.querySelector('.count_num').innerHTML = scoreNum;
document.querySelector(".won_lost").innerHTML = "Fight!";
function myFunction(x) {
  x.classList.toggle("change");
}

function scorePlus() {
  scoreNum++;
  document.querySelector('.count_num').innerHTML = scoreNum;
}

function scoreMinus() {
  scoreNum--;
  document.querySelector('.count_num').innerHTML = scoreNum;
}

function opponentsChoice() {
  let numForChoice = Math.floor((Math.random() * 10)) % 3;
  const opponentsArr = ["rock", "paper", "scissors"];
  document.querySelector('.rand').innerHTML = opponentsArr[numForChoice];
  return opponentsArr[numForChoice];
}

function playFunc(playersChoice) {
  const win = "You win", lose = "You lose", tie = "It's a tie";
  const rock = "rock", paper = "paper", scissors = "scissors";
  const gameResult = document.querySelector(".won_lost");
  let opponentChoiceVar = opponentsChoice();
  if (playersChoice.id == opponentChoiceVar) {
    gameResult.innerHTML = tie;
  } else if (playersChoice.id == rock && opponentChoiceVar == paper) {
      gameResult.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == rock && opponentChoiceVar == scissors) {
      gameResult.innerHTML = win;
      scorePlus();
  } else  if (playersChoice.id == paper && opponentChoiceVar == rock) {
      gameResult.innerHTML = win;
      scorePlus();
  } else if (playersChoice.id == paper && opponentChoiceVar == scissors) {
      gameResult.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == rock) {
      gameResult.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == paper) {
      gameResult.innerHTML = win;
      scorePlus();
  }

  const playerImage = document.getElementById('heroImg');
  if (scoreNum >= 2 && scoreNum < 4) 
    playerImage.src = 'images/mr_ascend.png';
  else if (scoreNum > -2 && scoreNum < 2) 
    playerImage.src = 'images/mr_start.png';
  else if (scoreNum <= -2 && scoreNum > -5) 
    playerImage.src = 'images/mr_black.png';
  else if (scoreNum <= -5)
    playerImage.src = 'images/mr_dead.png';
  else if (scoreNum >= 4)
    playerImage.src = 'images/mr_god.jpg';
}

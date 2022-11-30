let scoreNum = 0;

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
  let wonOrLost = document.querySelector(".won_lost");
  let opponentChoiceVar = opponentsChoice();
  if (playersChoice.id == opponentChoiceVar) {
    wonOrLost.innerHTML = tie;
  } else if (playersChoice.id == rock && opponentChoiceVar == paper) {
      wonOrLost.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == rock && opponentChoiceVar == scissors) {
      wonOrLost.innerHTML = win;
      scorePlus();
  } else  if (playersChoice.id == paper && opponentChoiceVar == rock) {
      wonOrLost.innerHTML = win;
      scorePlus();
  } else if (playersChoice.id == paper && opponentChoiceVar == scissors) {
      wonOrLost.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == rock) {
      wonOrLost.innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == paper) {
      wonOrLost.innerHTML = win;
      scorePlus();
  }

  if (scoreNum >= 2 && scoreNum < 4) 
    document.getElementById('heroImg').src = 'images/mr_ascend.png';
  else if (scoreNum > -2 && scoreNum < 2) 
    document.getElementById('heroImg').src = 'images/mr_start.png';
  else if (scoreNum <= -2 && scoreNum > -5) 
    document.getElementById('heroImg').src = 'images/mr_black.png';
  else if (scoreNum <= -5)
    document.getElementById('heroImg').src = 'images/mr_dead.png';
  else if (scoreNum >= 4)
    document.getElementById('heroImg').src = 'images/mr_god.jpg';
}

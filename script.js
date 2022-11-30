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
    let numForChoice = 0;
    let opponentsPlay;
    numForChoice = Math.floor((Math.random() * 10)) % 3;
    switch(numForChoice) {
      case 0:
        opponentsPlay = "rock";
        break;
      case 1:
        opponentsPlay = "paper";
        break;
      case 2:
        opponentsPlay = "scissors";
        break;
        default:
        break;
    }
    document.querySelector('.rand').innerHTML = opponentsPlay;
    return opponentsPlay;
}

function playFunc(playersChoice) {
  const win = "You win", lose = "You lose", tie = "It's a tie";
  const rock = "rock", paper = "paper", scissors = "scissors";
  let wonOrLost = ".won_lost";
  let opponentChoiceVar = opponentsChoice();
  // console.log(playersChoice.id);
  // console.log(opponentChoiceVar);
  if (playersChoice.id == opponentChoiceVar) {
    document.querySelector(wonOrLost).innerHTML = tie;
  } else if (playersChoice.id == rock && opponentChoiceVar == paper) {
      document.querySelector(wonOrLost).innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == rock && opponentChoiceVar == scissors) {
      document.querySelector(wonOrLost).innerHTML = win;
      scorePlus();
  } else  if (playersChoice.id == paper && opponentChoiceVar == rock) {
      document.querySelector(wonOrLost).innerHTML = win;
      scorePlus();
  } else if (playersChoice.id == paper && opponentChoiceVar == scissors) {
      document.querySelector(wonOrLost).innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == rock) {
      document.querySelector(wonOrLost).innerHTML = lose;
      scoreMinus();
  } else if (playersChoice.id == scissors && opponentChoiceVar == paper) {
      document.querySelector(wonOrLost).innerHTML = win;
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

//Document Elements
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;

let homeBox = document.getElementById("home-box");
let guestBox = document.getElementById("guest-box");

//Functions
function homeAddPoints(n) {
  homePoints += n;
  homeScore.textContent = homePoints;
  isWinning();
  sound(n);
}

function guestAddPoints(n) {
  guestPoints += n;
  guestScore.textContent = guestPoints;
  isWinning();
  sound(n);
}

function newGame() {
  homePoints = 0;
  guestPoints = 0;
  homeScore.textContent = homePoints;
  guestScore.textContent = guestPoints;
  guestBox.style.borderColor = "black";
  homeBox.style.borderColor = "black";
}

function isWinning() {
  if (homePoints > guestPoints) {
    homeBox.style.borderColor = "goldenrod";
    guestBox.style.borderColor = "black";
  } else if (homePoints < guestPoints) {
    guestBox.style.borderColor = "goldenrod";
    homeBox.style.borderColor = "black";
  } else {
    guestBox.style.borderColor = "black";
    homeBox.style.borderColor = "black";
  }
}

function sound(n) {
  let snd = new Audio("Bang.m4a");
  if (n === 3) {
    snd.play();
  }
}

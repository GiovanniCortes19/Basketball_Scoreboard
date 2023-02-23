//Document Elements
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;
//Functions
function homeAddPoints(n) {
  homePoints += n;
  homeScore.textContent = homePoints;
}

function guestAddPoints(n) {
  guestPoints += n;
  guestScore.textContent = guestPoints;
}

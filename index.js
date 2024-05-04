let homeScoreButton = document.getElementById("homeScorePlusOne");
let homeScoreEl = document.getElementById("homeScore");
let homeScore = 0;
let guestScoreButton = document.getElementById("guestScorePlusOne");
let guestScoreEl = document.getElementById("guestScore");
let guestScore = 0;

function homeScorePlusOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}
function homeScorePlusTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function homeScorePlusFive() {
  homeScore += 5;
  homeScoreEl.textContent = homeScore;
}
function guestScorePlusOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function guestScorePlusTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function guestScorePlusFive() {
  guestScore += 5;
  guestScoreEl.textContent = guestScore;
}

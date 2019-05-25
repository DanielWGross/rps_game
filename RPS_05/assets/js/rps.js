/*
 * Global HTML Variables
 */
var rpsJumbotron = document.getElementById("rps-jumbotron");
var rpsCardGroup = document.getElementById("rps-card-group");
var winText = document.getElementById("winCount");
var lossText = document.getElementById("lossCount");
var tieText = document.getElementById("tieCount");
var rpsResetButton = document.getElementById("reset-button");
/*
 * Other Global Variables
 */
var wins = 0;
var losses = 0;
var ties = 0;
/*
 * Check if the user presses either the 'r', 'p' or the 's' key
 * If they do log the key and hide the jumbotron
 * If they press the 'q' key, show the jumbotron again and log the key in a warning
 * Any other key should log a message that says 'bad key' in an error
 */
function gameStart(e) {
  if (e.key === 'r' || e.key === 'p' || e.key === 's') {
    console.log('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "none";
    rpsCardGroup.style.display = "flex";
  } else if (e.key === "q") {
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "block";
    rpsCardGroup.style.display = "none";
  } else {
    console.error('You pressed a bad key! You should feel bad about it!');
  }
}
/*
 * Function that sets the win, loss and tie values to zero.
 */
function initializeScores() {
  winText.textContent = wins;
  lossText.textContent = losses;
  tieText.textContent = ties;
}
/*
 * The gameStart function will be called everytime a user presses a key.
 */
document.onkeyup = gameStart;
/*
 * Add an event listener to our reset button when the user clicks it
 */
rpsResetButton.addEventListener("click", initializeScores);
/*
 * Call this function as the file loads to initialize the scores
 */
initializeScores();
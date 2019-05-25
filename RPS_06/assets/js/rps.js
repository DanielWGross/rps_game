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
    var computerGuess = computerPicker();
    console.log("The computer choose " + computerGuess);
  } else if (e.key === "q") {
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "block";
    rpsCardGroup.style.display = "none";
    initializeScores();
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
 * This function will pick a guess for the computer from the available options
 * Options are set in an array as 'r', 'p' or 's' for Rock, Paper or Scissors
 * We will call Math.random() to pick a number for us between 0 and 1
 * It is INCLUSIVE of 0 but NOT of 1
 * We than call Math.Floor() on the response from Math.Random() which will give us a whole number
 * which will be the largest integer less than or equal to a given number
 */
function computerPicker() {
  var computerOptions = ['r', 'p', 's'];
  var computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
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

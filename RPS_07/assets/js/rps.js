/*
 * Global HTML Variables
 */
var rpsJumbotron = document.getElementById("rps-jumbotron");
var rpsCardGroup = document.getElementById("rps-card-group");
var winText = document.getElementById("winCount");
var lossText = document.getElementById("lossCount");
var tieText = document.getElementById("tieCount");
var rpsResetButton = document.getElementById("reset-button");
var userImg = document.getElementById("user-img");
var computerImg = document.getElementById("computer-img");
/*
 * Other Global Variables
 */
var wins = 0;
var losses = 0;
var ties = 0;

function gameStart(e) {
  /*
   * Check if the user presses either the 'r', 'p' or the 's' key
   * If they do log the key and hide the jumbotron and show the gameboard
   * Call the computerPicker function and store the value it returns in 
   * the computerGuess variable and log it to the console
   * Call the updatePicture function
   */
  if (e.key === 'r' || e.key === 'p' || e.key === 's') {
    rpsJumbotron.style.display = "none";
    rpsCardGroup.style.display = "flex";
    var computerGuess = computerPicker();
    var computerPicture = updatePicture(computerGuess);
    computerImg.src = computerPicture;
    userImg.src = updatePicture(e.key);
    /*
     * If they press the 'q' key, show the jumbotron again and log the key in a warning
     * Also hide the gameboard
     * Also reset the scoreboard
     */
  } else if (e.key === "q") {
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "block";
    rpsCardGroup.style.display = "none";
    initializeScores();
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
 * Receive a character from either the user or the computer
 * Check if the character is either an 'r', a 'p' or an 's'
 * And return the appropriate img source
 */
function updatePicture(char) {
  if (char === 'r') {
    return 'assets/images/rock.png'
  } else if (char === 'p') {
    return 'assets/images/paper.png'
  } else if (char === 's') {
    return 'assets/images/scissors.png'
  }
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

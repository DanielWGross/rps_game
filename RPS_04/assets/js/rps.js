/*
 * Global Variables
 */
var rpsJumbotron = document.getElementById("rps-jumbotron");
var rpsCardGroup = document.getElementById("rps-card-group");

function gameStart(e) {
  /*
   * Check if the user presses either the 'r', 'p' or the 's' key
   * If they do log the key and hide the jumbotron
   * If they press the 'q' key, show the jumbotron again and log the key in a warning
   * Any other key should log a message that says 'bad key' in an error
   */
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
 * The gameStart function will be called everytime a user presses a key.
 */
document.onkeyup = gameStart;
/*
 * Global Variables
 */
var rpsJumbotron = document.getElementById("rps-jumbotron");
console.log(rpsJumbotron);
/*
 * This function will be called everytime a user presses a key.
 */
document.onkeyup = function (e) {
  /*
   * Check if the user presses either the 'r', 'p' or the 's' key
   * If they do log the key and hide the jumbotron
   * If they press the 'q' key, show the jumbotron again and log the key in a warning
   * Any other key should log a message that says 'bad key' in an error
   */
  if (e.key === 'r' || e.key === 'p' || e.key === 's') {
    console.log('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "none";
  } else if (e.key === "q") {
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display = "block";
  } else {
    console.error('You pressed a bad key! You should feel bad about it!');
  }
};
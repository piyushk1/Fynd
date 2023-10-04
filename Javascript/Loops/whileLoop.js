/*Implement a number guessing game using a while loop.
 Generate a random number between 1 and 100 as the target.
Prompt the user to guess the number.
Provide hints such as "Too high" or "Too low" and allow the user to keep guessing until they guess the correct number.
 Finally, display the number of attempts it took to guess correctly.*/

var readline = require("readline-sync");

const numberGuessGame = () => {
  const targetNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let tries = 0;

  console.log("Lets play the number Guessing Game");

  while (true) {
    guess = parseInt(
      readline.question("Guess the number (between 1 and 10): ")
    );
    tries++;

    if (guess === targetNumber) {
      console.log(
        `Yayyy!  You guessed the correct number ${targetNumber} in ${tries} attempts.`
      );
      break;
    } else if (guess < targetNumber) {
      console.log("Guess is too low. Try again.");
    } else {
      console.log("Guess is too high. Try again.");
    }
  }
};

numberGuessGame();

// Creates an array that lists out all of the options (entire alphabet).
var options = ["a", "f", "j", "l", "n", "r", "s", "t", "x", "y"];
// Creating variables to hold the number of wins, losses, guesses left, letters already guessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyGuessed = [];
//loop that cycles while guesses is greater than 0
//for (i = 0; i < guessesLeft; i++) {
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    // Add to already guessed list


    alreadyGuessed.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        alert('Good Job!')
        guessesLeft = 9;
        alreadyGuessed.length = 0;
    }
    else if (guessesLeft < 1) {
        losses++;
        guessesLeft = 9;
        alreadyGuessed.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }


    var uGuess = "<p> " + userGuess + "</p>";
    var uWins = "<p> " + wins + "</p>";
    var uLoss = "<p> " + losses + "</p>";
    var gLeft = "<p> " + guessesLeft + "</p>";
    var gSoFar = "<p> " + alreadyGuessed + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    
    document.querySelector("#userGuess").innerHTML = uGuess;
    document.querySelector("#wins").innerHTML = uWins;
    document.querySelector("#losses").innerHTML = uLoss;
    document.querySelector("#guessesLeft").innerHTML = gLeft;
    document.querySelector("#guessed").innerHTML = gSoFar;
};
var words = [
    "milkshake",
    "hamburger",
    "frenchfries",
    "coke",
    "floats",
    "hotdogs"
];

//loop for choosing random word

var game = Math.floor(Math.random() * words.length);
var answer = words[game];
var wordLength = answer.length;
var display = [wordLength];
var win = wordLength;
var letters = answer.split("");
var attemptsLeft = 15;
var winTotal = 0;
var lossTotal = 0;
var output = "";

var resetGameInstance = function () {
    game = Math.floor(Math.random() * words.length);
    answer = words[game];
    wordLength = answer.length;
    display = [wordLength];
    win = wordLength;
    letters = answer.split("");
    attemptsLeft = 15;

    start();
}

var start = function () {
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("empty-div").innerHTML = output;
    output = "";
}

window.onload = start();

document.onkeyup = function () {
    var userGuess = event.key;
    output = "";

    for (var j = 0; j < answer.length; j++) {

        if (userGuess == letters[j]) {
            display[j] = userGuess;
            win--;
        }

        output = output + display[j] + " ";
    }
    document.getElementById("empty-div").innerHTML = output;
    output = " ";
    attemptsLeft--;

    if (win < 1) {
        document.getElementById("guesses").innerHTML = "YOU WIN!";
        winTotal++;
        document.getElementById("wintotal").innerHTML = "Number of Wins: " + winTotal;
        resetGameInstance();

    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "YOU LOSE!";
        lossTotal++;
        document.getElementById("losstotal").innerHTML = "Number of Losses: " + lossTotal;
        resetGameInstance();

    } else {
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
    }

}



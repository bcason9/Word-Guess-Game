var words = [
    "GIRAFFE",
    "LION",
    "WILDEBEAST",
    "RHINOCEROS",
    "HIPPO",
    "GAZELLE",
    "ANTELOPE",
    "HYENA",
    "ELEPHANT",
    "CROCODILE",
    "TORTOISE",
    "CHEETAH",
    "ANTEATER",
    "JAGUAR",
    "OSTRICH",
    "ZEBRA",
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

    document.getElementById("usedletters").append(userGuess.toUpperCase())

    for (var j = 0; j < answer.length; j++) {

        if (userGuess.toUpperCase() == letters[j]) {
            display[j] = userGuess.toUpperCase();
            win--;
        }

        output = output + display[j] + " ";
    }
    document.getElementById("empty-div").innerHTML = output;
    attemptsLeft--;

    if (win < 1) {
        alert("YOU WIN! The word was " + answer);
        winTotal++;
        document.getElementById("wintotal").innerHTML = "Number of Wins: " + winTotal;
        attemptsLeft = 15;
        output = "";
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
        document.getElementById("usedletters").innerHTML = "";
        resetGameInstance();

    } else if (attemptsLeft < 1) {
        alert("YOU LOSE! The word was " + answer);
        lossTotal++;
        document.getElementById("losstotal").innerHTML = "Number of Losses: " + lossTotal;
        attemptsLeft = 15;
        output = "";
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
        document.getElementById("usedletters").innerHTML = "";
        resetGameInstance();
        
    } else {
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
    }

    
};




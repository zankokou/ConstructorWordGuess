var letter = require('./letter.js');

function Word(chosenWord) {
    this.lettersArr = [];

    // pushes letters in letters of chosenWord into lettersArr
    for (i = 0; i < chosenWord.length; i++) {
        var letterObj = new letter(chosenWord[i])
        this.lettersArr.push(letterObj)
        console.log(this.lettersArr);
    }

    // print
    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.lettersArr.length; i++) {
            answerLog += this.lettersArr[i] + " ";
        }
        console.log(answerLog + "\n");
    }

    // Pass user's guess through Letter method guess to check if it matches any of the letters in array
    this.userGuess = function (input) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].check(input);
        }
    }
}

module.export = Word;

var word = new Word('Hello');


word.userGuess();
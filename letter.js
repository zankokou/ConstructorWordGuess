
var guessedLettersArr = []
// constructor for when user types in a letter
function Letter(character) {

    // string value to store character
    this.letter = character;

    // boolean to see if character has been guessed of not
    this.guessed = false;

    // function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function () {
        if (this.guessed === false) {
            this.guessed = true;
            return this.letter
        }
        else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }

    };
    
    // function that takes a character as an argument and checks it against the underlying character,
    // updating the stored boolean value to true if it was guessed correctly
    this.check = function (guess) {
        if (guess === this.letter) {
            this.guess = true;
        }
    }

}





module.exports = Letter;
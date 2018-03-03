// start hangman game! 

// list of different states for hangman game.

var statesArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
//var statesArr = ['NEW MEXICO']

// global variables 

var s;
var count;
var answerArray;
var guesses;
var wins = 0;
var currentWord;
var message;

// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array

	function resetGame() {
		// clear previous data from game prior
		count = 5;
		answerArray = [];
		guesses = [];
		// document.getElementById('guesses').innerHTML = 'Letters guessed: ' + guesses;
		// document.getElementById('counter').innerHTML = 'Number of guesses remaining: ' + count;
	}

	function resetMessages() {
		document.getElementById('guesses').innerHTML = 'Letters guessed: ' + guesses;
		document.getElementById('counter').innerHTML = 'Number of guesses remaining: ' + count;
	}

	function startGame() {
		this.resetGame();
		setTimeout('resetMessages;', 3000)

		// using above array we choose a random word
		currentWord = statesArr[Math.floor(Math.random() * statesArr.length)].toUpperCase();

		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i].match(/[a-z]/i)) {
				answerArray[i] = '_';
			} else {
				answerArray[i] = ' ';
			}
		}

		// putting in a string
		s = answerArray.join(' ');
		document.getElementById('answer').innerHTML = s;
	}

	function checkInput(event) {
		message = '';
		var letterGuess = event.key.toUpperCase();
		var correctGuess = false;
		var alreadyGuessed = false;

		if (letterGuess.length > 0) {
			for (var g = 0; g < guesses.length; g++) {
				if (guesses[g] === letterGuess) {
					message ='Letter has already been guessed. Guess again.';
					alreadyGuessed = true;
				}
			}

			if (!alreadyGuessed) { 
				for (var i = 0; i < currentWord.length; i++) {
					if (currentWord[i].toUpperCase() === letterGuess.toUpperCase()) {
						answerArray[i] = letterGuess;
						correctGuess = true;
					}
				}

				//If letter guesses is incorrect, reduce 'letters guessed' by 1
				if (!correctGuess) {
					count--;
				}

				//Add guesses to guesses array
				guesses.push(letterGuess); 
			}

			s = answerArray.join(' ');
			console.log(currentWord)
			console.log(answerArray.join(''))
			if (currentWord == answerArray.join('')) {
				message = 'You Win! The correct answer was ' + currentWord + '. Play again!';
				wins = wins + 1;
				this.startGame();
			}

			if (count === 0) {
				message = 'You Lose :-( The correct answer was ' + currentWord + '. Play again!';
				this.startGame();
			}
		}

		document.getElementById('message').innerHTML = message;

		document.getElementById('answer').innerHTML = s;
		
		document.getElementById('guesses').innerHTML = 'Letters guessed: ' + guesses.sort().join(', ');

		document.getElementById('counter').innerHTML = 'Number of guesses remaining: ' + count;

		document.getElementById('stat').innerHTML = 'Number of wins: ' + wins;
	}

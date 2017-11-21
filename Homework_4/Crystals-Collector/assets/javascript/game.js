// start Crystal Collector game! 

// global variables 

var blueCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);;
var redCrystal = Math.floor((Math.random() * 12) + 1);;
var purpleCrystal = Math.floor((Math.random() * 12) + 1);;
var totalScore = 0;
var wins = 0;
var losses = 0;
var message;

function win() {
	$('#message').html('You won!  Play again!');
	wins++;
	$('#NumberOfWins').html('Number of wins: ' + wins);
	startGame();
} 

function lose() {
	$('#message').html('You lose!  Play again!');
	losses++;
	$('#NumberOfLosses').html('Number of losses: ' + losses);
	startGame();
}

function resetMessages() {
	$('#message').text('');
}

function resetGame() {
	// clear previous data from game prior
	$('#totalScore').html(totalScore = 0);

	$('.blue-gem').empty().off('click');
	blueCrystal = Math.floor((Math.random() * 12) + 1);
	$('.blue-gem').data(blueCrystal);

	$('.green-gem').empty().off('click');
	greenCrystal = Math.floor((Math.random() * 12) + 1);
	$('.greenCrystal').data(greenCrystal);

	$('.red-gem').empty().off('click');
	redCrystal = Math.floor((Math.random() * 12) + 1);
	$('.red-gem').data(redCrystal);

	$('.purple-gem').empty().off('click');
	purpleCrystal = Math.floor((Math.random() * 12) + 1);
	$('.purple-gem').data(purpleCrystal);

	console.log('blue ' + blueCrystal)
	console.log('green ' + greenCrystal)
	console.log('red ' + redCrystal)
	console.log('purple ' + purpleCrystal)
}

function startGame() {
	this.resetGame();
	setTimeout('resetMessages()', 3000);

	// Generate a random number
	var randomNumber = Math.floor((Math.random() * 120) + 19);
	$('#random-number').html(randomNumber);

	// Assigning numbers to crystals
	$('.blue-gem').on('click', function() {
		totalScore = totalScore + blueCrystal
		$('#totalScore').html(totalScore)
		if (totalScore === randomNumber) {
			win();
		}

		if (totalScore > randomNumber) {
			lose();
		}
	});

	$('.green-gem').on('click', function() {
		totalScore = totalScore + greenCrystal
		$('#totalScore').html(totalScore)
		if (totalScore === randomNumber) {
			win();
		}

		if (totalScore > randomNumber) {
			lose();
		}
	});

	$('.red-gem').on('click', function() {
		totalScore = totalScore + redCrystal
		$('#totalScore').html(totalScore)
		if (totalScore === randomNumber) {
			win();
		}

		if (totalScore > randomNumber) {
			lose();
		}
	});

	$('.purple-gem').on('click', function() {
		totalScore = totalScore + purpleCrystal
		$('#totalScore').html(totalScore)
		if (totalScore === randomNumber) {
			win();
		}

		if (totalScore > randomNumber) {
			lose();
		}
	});
}
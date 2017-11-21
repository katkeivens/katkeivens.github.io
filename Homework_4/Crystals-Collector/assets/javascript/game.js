// start Crystal Collector game! 

// global variables 

var randomNumber, blueCrystal, greenCrystal, redCrystal, purpleCrystal;
var totalScore = 0;
var wins = 0;
var losses = 0;
var message;


function resetGame() {
	// clear previous data from game prior
	$('#totalScore').html(totalScore = 0);
	//$('#totalScore').html(totalScore);
	console.log(totalScore)
	
	randomNumber = Math.floor((Math.random() * 120) + 19);
	blueCrystal = Math.floor((Math.random() * 12) + 1);
	greenCrystal = Math.floor((Math.random() * 12) + 1);
	redCrystal = Math.floor((Math.random() * 12) + 1);
	purpleCrystal = Math.floor((Math.random() * 12) + 1);
	
	console.log('blue ' + blueCrystal)
	console.log('green ' + greenCrystal)
	console.log('red ' + redCrystal)
	console.log('purple ' + purpleCrystal)
}

function resetMessages() {
	$('#message').text('');
}

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

function startGame() {
	resetGame();
	setTimeout('resetMessages()', 3000);

	// Generate a random number
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
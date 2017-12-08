var questions = [
	{
		questionTitle: 'How many Jedi are on the Jedi Council?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/jediCouncil.gif',
		answers: [
			{answerText: '10', correct: false},
			{answerText: '6', correct: false},
			{answerText: '12', correct: true},
			{answerText: '8', correct: false}
		]
	},
	{
		questionTitle: 'Who is the only actor to star in ALL Star Wars episodes so far, and will again return for Ep. 8?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/anthonyDaniels.gif',
		answers: [
			{answerText: 'Harrison Ford', correct: false},
			{answerText: 'Anthony Daniels', correct: true},
			{answerText: 'Peter Mayhew', correct: false},
			{answerText: 'Carrie Fisher', correct: false}
		]
	},	
	{
		questionTitle: 'Rey is a scavenger from:',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/rey.gif',
		answers: [
			{answerText: 'Utapau', correct: false},
			{answerText: 'Takodana', correct: false},
			{answerText: 'Jakku', correct: true},
			{answerText: 'Coruscant', correct: false}
		]
	},
	{
		questionTitle: 'Who said, "It\'s a trap!"?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/itsATrap.gif',
		answers: [
			{answerText: 'Lando Calirissian', correct: false},
			{answerText: 'Jar Jar Binks', correct: false},
			{answerText: 'Yoda', correct: false},
			{answerText: 'Admiral Akbar', correct: true}
		]
	},
	{
		questionTitle: 'Complete the classic line: "That\'s no moon; it\'s a...',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/noMoon.gif',
		answers: [
			{answerText: 'Droid', correct: false},
			{answerText: 'Space Station', correct: true},
			{answerText: 'Time Machine', correct: false},
			{answerText: 'Spaceship', correct: false}
		]
	},
	{
		questionTitle: 'Which US National Park played Endor in Return Of The Jedi?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/redwood.gif',
		answers: [
			{answerText: 'Redwood', correct: true},
			{answerText: 'Muir Woods', correct: false},
			{answerText: 'Yosemite', correct: false},
			{answerText: 'Sequoia', correct: false}
		]
	},
	{
		questionTitle: 'How many languages is C-3PO fluent in?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/c3po.gif',
		answers: [
			{answerText: '600,000', correct: false},
			{answerText: '3 million', correct: false},
			{answerText: '1 million', correct: false},
			{answerText: '6 million', correct: true}
		]
	},
	{
		questionTitle: 'What color is Mace Windu\'s lightsaber?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/purpleLightsaber.gif',
		answers: [
			{answerText: 'Green', correct: false},
			{answerText: 'Black', correct: false},
			{answerText: 'Purple', correct: true},
			{answerText: 'Blue', correct: false}
		]
	},
	{
		questionTitle: 'In Episode VI: Return of the Jedi, the growls and sounds of the Rancor in Jabba\'s Palace were actually made by what animal?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/dachshund.gif',
		answers: [
			{answerText: 'Wolverwine', correct: false},
			{answerText: 'Dachshund', correct: true},
			{answerText: 'Pigeon', correct: false},
			{answerText: 'Panther', correct: false}
		]
	},
	{
		questionTitle: 'Which species stole the plans to the Death Star?',
		wrongImageUrl: 'assets/images/darkSide.gif',
		correctImageUrl: 'assets/images/jediCouncil.gif',
		answers: [
			{answerText: 'Bothans', correct: true},
			{answerText: 'Selonians', correct: false},
			{answerText: 'Mynocks', correct: false},
			{answerText: 'Khommites', correct: false}
		]
	}
]

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentQuestion = 0;
var audioElement = document.createElement("audio");
var intervalId;
var timerRunning = false;

var timer = {
	time: 30,

	reset: function() {
		timer.time = 30;
		$('#timeRemaining').html('30');
		clearInterval(intervalId);
		timerRunning = false;
	},

	start: function() {
		if (!timerRunning) {
			$('#timeRemaining').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>')
			intervalId = setInterval(timer.count, 1000);
			timerRunning = true;

		}
	},

	count: function() {
		timer.time--;
		$('#timeRemaining').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>');
		if (timer.time == 0) {
			answer();
		}
	}
}

function question() {
	timer.reset();
	timer.start();
	$('#answers').empty();
	$('#question').html('<h2>' + questions[currentQuestion].questionTitle + '</h2>');
	for (var i = 0; i < questions[currentQuestion].answers.length; i ++) {
		var button = $('<button onclick="answer('+i+')" class="answerButton">' + questions[currentQuestion].answers[i].answerText + '</button>');
		$('#answers').append(button)
	}
}

function nextQuestion() {
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	currentQuestion = currentQuestion + 1;
	if (currentQuestion < questions.length){
		question();	
	} else {
		gameSummary();
	}
}

function initialLoad() {
		$('.startingDiv').show();
		$('.correctAnswer').hide();
		$('.summary').hide();
		$('.questionsDiv').hide();
      	audioElement.setAttribute("src", "assets/images/starWarsTheme.mp3");
      	audioElement.play();

}

function startQuiz() {	
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	currentQuestion = 0;
	audioElement.pause();
	question();
}

function answer(i) {
	$('.startingDiv').hide();
	$('.correctAnswer').show();
	$('.summary').hide();
	$('.questionsDiv').hide();
	var choice = questions[currentQuestion].answers[i];
	var correctImage = questions[currentQuestion].correctImageUrl;
	var wrongImage = questions[currentQuestion].wrongImageUrl;

	for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
		if (questions[currentQuestion].answers[i].correct === true) {
			var rightAnswer = questions[currentQuestion].answers[i].answerText;
		}
	}
	
	if (timer.time > 0) {
		if (choice.correct === true) {
			$('#message').html('<h2>Correct! The Force is strong with you!</h2>')
			$('#correctAnswer').empty();
			$('#image').html('<img src="'+correctImage+'"/>')
			correctAnswers++;

		} else {
			$('#message').html('<h2>Wrong! Try you must!</h2>');
			$('#correctAnswer').html('<p>The correct answer was: ' + rightAnswer + '</p>');
			$('#image').html('<img src="'+wrongImage+'"/>')
			incorrectAnswers++;
		}
	}

	if (timer.time === 0) {
		$('#message').html('<h2>Time\'s up!</h2>');
		$('#correctAnswer').html('<p>The correct answer was: ' + rightAnswer + '</p>');
		$('#image').html('<img src="'+wrongImage+'"/>')
		unanswered++;
	}
	setTimeout('nextQuestion()', 5000)
}

function gameSummary() {
	timer.reset();
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').show();
	$('.questionsDiv').hide();
	if (correctAnswers <= 5) {
		$('#summaryImage').html('<img src="assets/images/muchToLearn.gif"/>');
	} else {
		$('#summaryImage').html('<img src="assets/images/yoda.gif"/>')
	}
	$('#correctAnswers').html('<p>Correct Answers: '+ correctAnswers + '</p>');
	$('#incorrectAnswers').html('<p>Incorrect Answers: ' + incorrectAnswers + '</p>');
	$('#unanswered').html('<p>Unanswered Questions: '+ unanswered + '</p>')
}




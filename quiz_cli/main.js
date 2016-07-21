var readline = require('readline');
var createQuiz = require('./quiz.js').createQuiz;
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Answer> ');

var quiz = createQuiz();
var qIndex = quiz.nextQuestion;

var endQuiz = function(){
	console.log('Game over');
	console.log(quiz.status);
	rl.close();
};
var askQuestion = function(){
	console.log(quiz.getQuestionText(qIndex));	
	rl.prompt();
};
var onAnswer = function(ans){
	quiz.answer(qIndex,ans);
	qIndex = quiz.nextQuestion;
	(qIndex < 0)?endQuiz():askQuestion();
};

rl.on('line',onAnswer);
askQuestion();
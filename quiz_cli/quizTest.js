var createQuiz = require('./quiz.js').createQuiz;
var assert = require('assert');
var test = {};
exports.test = test;

test['both questions were answered correctly'] = function(){	
	var q = createQuiz();
	q.answer(0,'2');
	q.answer(1,'2');
	assert.equal(q.status,'2/2 are correct in 0 seconds');
};

test['both questions were answered incorrectly'] = function(){	
	var q = createQuiz();
	q.answer(0,'3');
	q.answer(1,'3');
	assert.equal(q.status,'0/2 are correct in 0 seconds');
};

test['one of the two questions were answered incorrectly'] = function(){	
	var q = createQuiz();
	q.answer(0,'2');
	q.answer(1,'3');
	assert.equal(q.status,'1/2 are correct in 0 seconds');
};

var fixedTime;
var getTimeStub = function(){
	return fixedTime;
};

test['quiz knows the time taken from the start till answering the last question'] = function(){
	var start = new Date();
	var end = new Date(start.getTime()+10000);
	fixedTime = start;
	var q = createQuiz(getTimeStub);
	q.answer(0,'2');	
	fixedTime = end;
	q.answer(1,'3');
	assert.equal(q.timeTaken,10);
	assert.equal(q.status,'1/2 are correct in 10 seconds');
};

test['quiz keeps giving the next question till all are answered'] = function(){
	var quiz = createQuiz();
	
	var qIndex = quiz.nextQuestion;
	assert.equal(0,qIndex);
	
	quiz.answer(qIndex,'a');
	qIndex = quiz.nextQuestion;

	assert.equal(1,qIndex);
	quiz.answer(qIndex,'b');
	qIndex = quiz.nextQuestion;

	assert.equal(-1,qIndex);
	assert.equal(quiz.status,'0/2 are correct in 0 seconds');
};

test['quiz gives the requested question text'] = function(){
	var quiz = createQuiz();
	assert.equal(quiz.getQuestionText(0),'1+1=');
};
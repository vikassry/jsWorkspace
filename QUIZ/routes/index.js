var express = require('express');
var lib = require('../lib/quiz.js');
var quiz = lib.init('data/quiz.db');
var getDb = require('../lib/DBLib.js').create_db('data/quiz.db');
var gameLib = require('../lib/game.js').lib;
var router = express.Router();
var users = require("./users").users;
var display = require("./display").display;
var action = require("./action").action;

var requireLogin = function(request, response, next){
    request.session.userEmail ? next(): response.redirect('/login');
};

router.get('/', function(request, response) {
	response.render('index');
});

router.get('/login', function(request, response) {
	users.get.login(request, response);
});

router.post('/login', function(request, response) {
    users.post.login(request, response);
});

router.get("/logout", users.get.logout);

router.get('/quizzes', function(request, response) {
    display.get.showQuizList(request, response);
});

router.get('/dashboard', requireLogin, function(request, response) {
    display.get.showQuizList(request, response);
});

router.get("/createQuiz", function(request, response) {
    action.get.createQuiz(request, response);
});

router.post("/createQuiz", function(request, response) {
    action.post.createQuiz(request, response);
});

router.get('/join/:id', function(request, response) {
	var db = getDb();
	var quizId = request.params.id;
	var useremail = request.session.userEmail;
	gameLib.join(useremail,quizId,db,function(err){
		response.redirect("/quiz/"+quizId);
	})
});

router.post('/answer/:id', requireLogin, function(request, response) {
    display.post.answerQuestion(request, response);
});

router.get('/quiz/:id', requireLogin, function(request, response) {
    display.get.goToFirstQuestion(request, response);
});

router.get('/quiz/:id/:qId', requireLogin, function(request, response) {
    display.get.showQuestion(request, response);
});

router.get('/report/:id', requireLogin, function(request, response) {
    display.get.reportCard(request, response);
});

module.exports = router;

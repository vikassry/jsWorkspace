var lib = require('../lib/quiz.js');
var quiz = lib.init("data/quiz.db");

var _display = {};
var _get = {};
var _post = {};
var questions;
var withAnswer;
var paperId;
var attempt;

_get.showQuizList = function(request, response) {
    var userEmail = request.session.userEmail;
    var quizzes = require("../resources/quizzes.json");

    var quizList = Object.keys(quizzes).map(function (key) {
        var questionPath = "../resources/" + quizzes[key].location;
        var questionIndexes = Object.keys(require(questionPath))
        return { index: key, name: quizzes[key].name, totalQuestions: questionIndexes.length };
    });

    var quizDetails = { quizList: quizList,  email: userEmail};
    response.render('quizzes', quizDetails);
};

_get.goToFirstQuestion = function (request, response) {
    attempt = 0;
    paperId = request.params.id;
    var quizPath = "../resources/" + require("../resources/quizzes.json")[paperId].location;
    questions = formatter(require(quizPath));
    response.redirect("/quiz/" + paperId + "/1")
};

var formatter = function(questions) {
  withAnswer = questions;
  return Object.keys(questions).map(function (questionKey) {
      return {id: questionKey, question: questions[questionKey].question, options: questions[questionKey].options, isCorrect: "false"}
  });
};

_get.showQuestion = function(request, response) {
    var quizId = request.params.qId;
    var content = { details: questions[quizId - 1], email: request.session.userEmail};

    response.render("serve-question/serve-question", content);
};

_get.reportCard = function(request, response) {

    if(attempt != questions.length){
        response.redirect("/500");
        return;
    }


    var numberOfCurrectAnswer = questions.filter( function(question) {
       return question.isCorrect == true
    }).length;

    var report = {
        correct: numberOfCurrectAnswer,
        total: questions.length,
        quizName: require("../resources/quizzes.json")[paperId].name,
        email: request.session.userEmail
    };

    questions = withAnswer = paperId = undefined;

    response.render("report/report", report);
};

_post.answerQuestion = function(request, response) {
    attempt++;
    var currentQuestionId = parseInt(request.params.id);
    var question = withAnswer[currentQuestionId];
    questions[currentQuestionId - 1].isCorrect = (question.answer == request.body.option);

    if (currentQuestionId == questions.length)
        return response.redirect("/report/" + paperId);

    response.redirect("/quiz/" + paperId + "/" + (currentQuestionId + 1));
};


_display.get = _get;
_display.post = _post;

exports.display = _display;

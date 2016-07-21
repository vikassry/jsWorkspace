var lib = require('../lib/quiz.js');
var quiz = lib.init("data/quiz.db");

var _action = {};
var _get = {};
var _post = {};

_get.createQuiz = function (request, response) {
    response.render("create-quiz/create-quiz");
};

_post.createQuiz = function (request, response) {
    var formData = request.body;
    formData.user = request.session.userEmail;
    quiz.createQuiz(formData, function(error) {
        error && response.render("create-quiz/create-quiz", {error: "Please try after sometime"});
        !error && response.redirect("createQuiz");
    });
};
_action.get = _get;
_action.post = _post;

exports.action = _action;

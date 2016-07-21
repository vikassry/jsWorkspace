var lib = require('../lib/quiz.js');
var quiz = lib.init('data/quiz.db');
var bcrypt = require("bcryptjs");


var users = {};

var _get = {};
var _post = {};

// Common Methods

var requireLogin = function(request, response){
    request.session.userEmail ? next(): response.redirect('/login');
};

_get.logout = function(request, response) {
    request.session.destroy();
    response.redirect('/login');
};

_get.login = function(request, response) {
    response.render("login");
};


_post.login = function(request, response) {
    if (request.body.exist) {
        loginUser(request, response);
    } else {
        quiz.getUser(request.body.email,function(err,ext){
            if(ext)
                response.render('login',{error:"User Email ID already exists"});
            else
                registerUser(request, response);
        });
    }
};

var registerUser = function(request, response) {
    var password = bcrypt.hashSync(request.body.password);
    var new_user = {
        "email": request.body.email,
        "password": password
    };
    quiz.addUser(new_user, function(err) {
        if (!err){
            request.session.userEmail = new_user.email;
            response.redirect('/quizzes');
        }else{
            response.render('login',{error:"Server Error..."});
        }
    });
};

var loginUser = function(request, response){
    var user = {"email":request.body.email,"password":request.body.password};
    quiz.getUser(user.email,function(err,existingUser){
        if(!existingUser){
            response.render('login',{error:'Incorrect E-mail Id or password'});
        }
        else{
            var isValidPassword = bcrypt.compareSync(user.password,existingUser.password);
            if(isValidPassword){
                request.session.userEmail = user.email;
                response.redirect('/dashboard');
            }
            else
                response.render('login',{error:'Incorrect E-mail Id or password'});
        }
    });
};


users.get = _get;
users.post = _post;

exports.users = users;
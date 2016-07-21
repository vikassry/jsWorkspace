var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:"secret hai bhai"}));
app.use(express.static(path.join(__dirname, 'views')));
app.enable('verbose errors');

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        var user;

        if(req.session){
            user = req.session.userEmail
        }

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            email: user
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    var user;

    if(req.session){
        user = req.session.userEmail
    }

    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        email: user
    });
});

app.get("/500", function(request, response){
    var user;

    if(request.session){
        user = request.session.userEmail
    }

    response.render("error", {status: 500, email: user});
});
app.get("/404", function(request, response){
    response.render("error");
});


module.exports = app;

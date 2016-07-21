var sqlite3 = require("sqlite3").verbose();

var _addUser = function(user,db,onComplete){
	var insert_user = "insert into login(useremail,password) values('"+user.email+"','"+user.password+"')";
	db.run(insert_user,function(err){
		_getUser(user.email,db,onComplete);
	});
};

var _getUser = function(userEmail,db,onComplete){
	var select_user = "select * from login where useremail='"+userEmail+"'";
	db.get(select_user,function(err,user){
		if(err){
			console.log(err);
		}
		onComplete(null,user);
	});
};

var _getTopics = function(userEmail, db, onComplete){
	var selectTopicsQuery = "select id,name,duration from topics where useremail != '"+userEmail+"'and status='open';"
	db.all(selectTopicsQuery,function(err,topics){
		onComplete(null,topics);
	});
};

var _createQuiz = function(data, db, onComplete) {
    var createQuizQuery = "insert into topics(name, requiredParticipant, duration, questionLocation, useremail, status) values('" +
        data.name + "', " + data.noOfPart + ", " +
        data.time + ", '" + data.question + "', '" + data.user+ "', 'open');";

    db.run(createQuizQuery, onComplete)
};

var init = function(location) {
	var operate = function(operation) {
		return function() {
			var onComplete = (arguments.length == 2) ? arguments[1] : arguments[0];
			var arg = (arguments.length == 2) && arguments[0];
			var onDBOpen = function(err) {
				if (err) {
					onComplete(err);
					return;
				}
				db.run("PRAGMA foreign_keys = 'ON';");
				arg && operation(arg, db, onComplete);
				arg || operation(db, onComplete);
				db.close();
			};
			var db = new sqlite3.Database(location, onDBOpen);
		};
	};

	var records = {
		addUser:operate(_addUser),
		getUser:operate(_getUser),
		getTopics:operate(_getTopics),
		createQuiz:operate(_createQuiz)
	};

	return records;
};

exports.init = init;
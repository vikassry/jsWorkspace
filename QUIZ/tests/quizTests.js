var lib = require('../lib/quiz.js');
var assert = require('chai').assert;
var fs = require('fs');
var dbFileData = fs.readFileSync('tests/data/quiz.db.backup');

var quiz;
describe('quiz', function() {
	beforeEach(function() {
		fs.writeFileSync('tests/data/quiz.db', dbFileData);
		quiz = lib.init('tests/data/quiz.db');
	});
	
	describe('#logInUser',function(){
		it('registers the new user',function(done){
			var new_user = {"email":"ram@email.com","password":"ram"};
			quiz.addUser(new_user,function(err){
				assert.notOk(err);
				quiz.getUser(new_user.email,function(err,user){
					assert.deepEqual(user,{"useremail":"ram@email.com","password":"ram"});
					done();
				});
			});
		});

		it('login abc with emailId as abc@email.com and password as abc',function(done){
			var user = {"email":"abc@email.com","password":"abc"};
			quiz.getUser(user.email,function(err,existing_user){
				assert.deepEqual(existing_user,{"useremail":"abc@email.com","password":"abc"});
				done();
			});
		});

		it("doesn't login abc with emailId as abc@email.com and wrong password as pqr",function(done){
			var user = {"email":"abc@email.com","password":"pqr"};
			quiz.getUser(user.email,function(err,existing_user){
				assert.notEqual(existing_user,user);
				done();
			});
		});

		it("doesn't login krati when not registered and tries to login",function(done){
			var user = {"email":"krati@email.com","password":"krati"};
			quiz.getUser(user.email,function(err,existing_user){
				assert.notOk(existing_user);
				done();
			});
		});
	});

	describe('#getTopics', function() {
		it('retrives the all the topic ids,names other than the owners', function(done) {
			var userEmail = 'abc@email.com';
			var expected = [{
				id: 2,
				name: 'SS',
				duration: 20
			}, {
				id: 3,
				name: 'Language',
				duration: 15
			}];
			quiz.getTopics(userEmail, function(err, topics) {
				assert.notOk(err);
				assert.deepEqual(topics, expected);
				done();
			});
		});
	});

});
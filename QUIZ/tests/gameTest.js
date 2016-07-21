var	gameLib = require('../lib/game.js').lib;
var	gameProto = require('../lib/game.js').proto;

var assert = require('chai').assert;
var fs = require('fs');
var dbFileData = fs.readFileSync('tests/data/quiz.db.backup');
var getDb = require('../lib/DBLib.js').create_db('tests/data/quiz.db');
var db;
describe('game', function() {
	 beforeEach(function() {
	 	fs.writeFileSync('tests/data/quiz.db', dbFileData);
	 	db = getDb();
	 });
	afterEach(function(){
		db.close();
	});
	//describe('#load',function()	{
	//	it('it loads the game from database and creats game object ',function(done){
	//		var expectedGame = {
	//							id:2,
	//							name:"SS",
	//							duration:10,
	//							master:"pqr@email.com",
	//							questionLocation: "quiz.json",
	//							requiredParticipant: 10,
	//							player:{email:"abc@email.com"}
	//						};
	//		gameLib.load(2,db,function(err,game){
	//			assert.notOk(err);
	//			assert.deepEqual(game,expectedGame);
	//			done();
	//		});
	//	});
	//});
	//describe('#start',function() {
	//	it('it starts the quiz with perticular user',function(){
	//		var Game = {
	//					id:1,
	//					name:"GK",
	//					duration:"30",
	//					master:"abc@email.com",
	//					questionLocation: "quiz.json",
	//					requiredParticipant: 10,
	//					player:{email:"abc@gmail.com"}
    //
	//				};
	//		var expectedGame = {
	//					id:1,
	//					name:"GK",
	//					duration:"30",
	//					master:"abc@email.com",
	//					questionLocation: "quiz.json",
	//					requiredParticipant: 10,
	//					player:{email:"abc@gmail.com",attemted:0,commited:[],left:['0']}
	//		};
	//		expectedGame.__proto__=gameProto;
	//		var currentGame = gameLib.start(Game);
	//		assert.deepEqual(expectedGame,currentGame);
	//	});
	//});
	//describe('#join',function()	{
	//	it('joins perticular user to specifid quiz',function(done){
	//		gameLib.join("pqr@email.com",1,db,function(err){
	//				gameLib.load(1,db,function(err,game){
	//				assert.notOk(err);
	//				assert.deepEqual(game.player,{email:"pqr@email.com"});
	//				done();
	//			})
	//		});
	//	});
	//});
	describe('#getQuestion',function() {
		it('it gets question for player',function(){
			var Game = {
				id:2,name:"SS",
				duration:"20",
				master:"pqr@email.com",
				questions:[
							{"q":"what is national food","a":"rice"},
							{"q":"what is national bird","a":"crow"}
							],
							player:{email:"abc@email.com"}
						};
			var q1 = gameProto.getQuestion.call(Game);
			
			assert.deepEqual(q1,Game.questions[0]);
		});
	});
});
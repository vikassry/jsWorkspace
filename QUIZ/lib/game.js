var game={};
var proto={};
exports.lib =game;
exports.proto = proto;

game.load = function(quizId,db,onComplet){
	var topicQuerry = "SELECT id,name,duration,useremail as master,questions FROM topics where id='"+quizId+"';";
	var participatQuerry= "SELECT useremail FROM participate where quizId='"+quizId+"';";
	var topicSetQuerry = "Update topics SET status ='running' where id = '"+quizId+"';";
	db.get(topicQuerry,function(err,game){
		db.run(topicSetQuerry);
		db.get(participatQuerry,function(err,player){
			game.questions = JSON.parse(game.questions);
			game.player ={email: player.useremail};
			if(err)
				console.log(err);
			else
				onComplet(null,game);

		});
	});
};

game.start = function(game) {
	game.player.attemted =0;
	game.player.commited =[];
	game.player.left = Object.keys(game.questions);
	game.__proto__=proto;
	return game;
};

game.join = function(useremail,quizId,db,onComplet){
	var joinquerry = 'insert into participate(useremail, quizId) values ("'+useremail+'","'+quizId+'");'
	var statusquerry = 'update topics set status ="running" where id='+quizId;

	db.run(joinquerry,function(err){
		db.run(statusquerry);
		onComplet(err);
	}) 
};

proto.getQuestion = function(){
	return this.questions[0];
}


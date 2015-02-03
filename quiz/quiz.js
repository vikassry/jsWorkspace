var m = require('./qm.js').m;

var _getTime = function(){
	return new Date();
};
exports.createQuiz = function(getTime){
	getTime = getTime || _getTime;
	var attempted = 0;
	var correct = 0;
	var total = m.questions.length;
	var startTime = getTime();
	var endTime;
	var quiz = {
		answer:function(index, givenAnswer){
			attempted++;
			if(attempted==total) 
				endTime =  getTime();
			m.checkAnswer(index,givenAnswer) && correct++;
		},
		get status(){
			return [correct,attempted].join('/') + ' are correct in '+this.timeTaken+' seconds';
		},
		get timeTaken(){			
			return (endTime-startTime)/1000;
		},
		get nextQuestion(){
			return attempted<total?attempted:-1;
		},
		getQuestionText:function(index){
			return m.questions[index].q;
		}

	};
	return quiz;
};
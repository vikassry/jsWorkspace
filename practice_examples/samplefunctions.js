var fb = function(){
	console.log("waste of time");
};

function socnet() {
	if (process.argv[2] == 1)
		return fb();
	return whats();
};

function whats() {
	console.log('popular messenger');
};

 var test = function (x){
	x(process.argv[2]);		//var test= socnet;
};

test(socnet);
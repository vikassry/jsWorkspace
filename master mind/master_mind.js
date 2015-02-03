var m = {};
exports.m = m ;

m.generateCode = function(num){
	if(num) return num;
	var number = 0, count = 0;
	while(count < 5){
		var single_digit = Math.ceil(Math.random()*7)
		number = (number + single_digit) * 10;
		count += 1;
	}
	return (number/10);
}
m.compareUserInput = function(code,userInput){
	var ob = {present:0, correct:0};
	code = String(code).split('');
	userInput = String(userInput).split('');
	code.forEach(function(element1,index1){
		if(element1 == userInput[index1]) ob.correct += 1;
		var keep_going = true;
		userInput.forEach(function(element2,index2){
			if(keep_going){
				if(element1 == element2){
					ob.present += 1;
					keep_going = false;
					userInput[index2] = 0;
				}
			}
		});
	});
	ob.present = ob.present - ob.correct; 
	return ob;
}
m.checkBetween09 = function(number){
	number = String(number).split("");
	var flag = true;
	number.forEach(function(ele){
		if(+ele == 0 || +ele == 9) flag = false;
	});
	return flag;
}
m.checkUserInput = function(number){
	if(String(number).length !== 5){console.log("Invalid Guess"); return false;}
	if(!m.checkBetween09(number)){console.log("Invalid Guess"); return false;}
	if(!number){console.log("Invalid Guess"); return false;}
	return true;	
}
m.winOrNot = function(result_object,attempts,sys_code){
	if(result_object.correct == 5){ 
		console.log("You Won in " + attempts + " attempts")
		attempts = 12;
	}
	if(attempts == 12 && result_object.correct != 5){
		console.log("You Loose");
		console.log("Code is:" + sys_code);
	}
	return attempts;
}
m.trails = [];
m.displayResult = function(userInput,result,code){
	m.trails.push(userInput);
	console.log("                          Guess Present Correct Attempt");
	console.log("                         -------------------------------");
	m.trails.forEach(function(element,index){
		var ob = m.compareUserInput(code,element);
		console.log("                          " + element + "     " + ob.present +"      " + ob.correct + "      " + (index+1));
	});
}
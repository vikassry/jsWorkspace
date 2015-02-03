var m = require('./master_mind.js').m;
var readline = require('readline');
var rl = readline.createInterface({
  	input: process.stdin,
  	output: process.stdout
});

rl.setPrompt("Enter Your Guess:");

console.log("                         --------- MASTER MIND ---------              ");
console.log("   ");
var sys_code = m.generateCode();
console.log(" Crack the five digit secret code with digits between 1 to 8, (Eg:24573)");
console.log(" ");
var attempts = 1;
rl.prompt();
rl.on('line', function(userInput) {
	userInput = userInput.trim();
  	if(m.checkUserInput(userInput)){
  		var com_result = m.compareUserInput(sys_code,userInput);		
  		m.displayResult(userInput,com_result,sys_code);
  		attempts = m.winOrNot(com_result,attempts,sys_code);
  		attempts = attempts + 1;
  	}
  	if(attempts > 12)rl.close();
  	else rl.prompt();
});

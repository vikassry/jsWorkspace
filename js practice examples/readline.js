// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you think of node.js? ", function(ans) {
//   // TODO: Log the answer in a database
//   console.log("Thank you for your valuable feedback:", ans);

//   rl.close();
// });



var readline=require('readline');
var rl= readline.createInterface({input:process.stdin, output:process.stdout});

rl.question('what is your name?', function(answer){
	console.log('Name:',answer);
	rl.close();
});
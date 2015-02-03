var fs = require('fs');
var lib = require('./wclib').lib;
var ERROR_TEMPLATE = 'wc: _FILE_: No such file or directory';
 
exports.run = function(args){
	var wcArgs = lib.readArgs(args);
	var filename = wcArgs.filename;
	var options = wcArgs.options
	if(!fs.existsSync(filename))
		return ERROR_TEMPLATE.replace(/_FILE_/,filename);
	
	var content = fs.readFileSync(filename,'utf-8');
	var c = lib.analyze(content);
	var result = [];
	var fillAnswer = function(choice){
		options.indexOf(choice)>=0 && result.push(c[choice]);	
	};
	['lines','words','chars'].forEach(fillAnswer);
	result.push(filename);
	return result.join(' ');
};
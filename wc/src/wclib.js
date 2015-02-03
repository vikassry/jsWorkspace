

var lib = {};
exports.lib = lib;
var isNotEmpty = function(x){return x!==''};
var countWords = function(line){
	return line.split(/\s+/).filter(isNotEmpty).length;
};
lib.analyze = function(text){
	var count = {};
	var lines = text.split('\r\n');
	count.lines = lines.length-1;
	count.chars = text.length;
	count.words = countWords(text);
	return count;
}; 
var optionMap = {
	'-c':'chars',
	'-l':'lines',
	'-w':'words'
};
lib.readArgs = function(args){
	var startsWithMinus = function(item){
		return item.indexOf('-')==0;
	};
	var isFileName = function(item){
		return !startsWithMinus(item);
	};
	var options = args.filter(startsWithMinus);
	options.length==0 && (options=['-l','-w','-c']);
	var fileNames = args.filter(isFileName);
	return {
		fileNames:fileNames[0],
		options: options)
	};
};
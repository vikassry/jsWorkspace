var assert = require('assert');
var lib = require('../../src/wclib.js').lib;
var test = {};
exports.test = test;
test['analysis of "one two three" gives l:0 w:3 c:13'] = function(){
	var result = lib.analyze('one two three');
	assert.deepEqual(result,{lines:0,words:3,chars:13});
};
test['analysis of "one two\r\nthree" gives l:1 w:3 c:14'] = function(){
	var result = lib.analyze('one two\r\nthree');
	assert.deepEqual(result,{lines:1,words:3,chars:14});
};
test['analysis of "one  two  three" gives l:0 w:3 c:15'] = function(){
	var result = lib.analyze('one  two  three');
	assert.deepEqual(result,{lines:0,words:3,chars:15});
};
test['analysis of "one\ttwo\tthree\tfour" gives l:0 w:4 c:18'] = function(){
	var result = lib.analyze('one\ttwo\tthree\tfour');
	assert.deepEqual(result,{lines:0,words:4,chars:18});
};

test['analysis of "\t\r\none\r\n\t" gives l:2 w:1 c:9'] = function(){
	var result = lib.analyze('\t\r\none\r\n\t');
	assert.deepEqual(result,{lines:2,words:1,chars:9});
};

test['analysis of "\t\t\t\t\t\t\t" gives l:0 w:0 c:7'] = function(){
	var result = lib.analyze('\t\t\t\t\t\t\t');
	assert.deepEqual(result,{lines:0,words:0,chars:7});
};

test['analysis of "\r\n\r\n\r\n\r\n\r\n\r\n\r\n" gives l:7 w:0 c:14'] = function(){
	var result = lib.analyze('\r\n\r\n\r\n\r\n\r\n\r\n\r\n');
	assert.deepEqual(result,{lines:7,words:0,chars:14});
};

test['readArgs finds filename'] = function(){
	var args = lib.readArgs(['one.txt']);
	assert.deepEqual(args.fileNames,'one.txt');
	assert.deepEqual(args.options,['lines','words','chars']);
};

test['readArgs finds filename and -c'] = function(){
	var args = lib.readArgs(['-c','one.txt']);
	assert.deepEqual(args.fileNames,'one.txt');
	assert.deepEqual(args.options,['chars']);
};

test['readArgs finds filename and -l'] = function(){
	var args = lib.readArgs(['-l','one.txt']);
	assert.deepEqual(args.fileNames,'one.txt');
	assert.deepEqual(args.options,['lines']);
};

test['readArgs finds filename and -w'] = function(){
	var args = lib.readArgs(['-w','one.txt']);
	assert.deepEqual(args.fileNames,'one.txt');
	assert.deepEqual(args.options,['words']);
};

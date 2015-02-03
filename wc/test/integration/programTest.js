var assert = require('assert');
var test = {};
exports.test = test;
var program = require('../../src/program.js');

test['wc one.txt => 2 10 48 one.txt'] = function(){
	assert.equal(program.run(['one.txt']),'2 10 48 one.txt');
};

test['wc two.txt => 0 3 13 two.txt'] = function(){
	assert.equal(program.run(['two.txt']),'0 3 13 two.txt');
};

test['wc three-tab.txt => 0 4 18 three-tab.txt'] = function(){
	assert.equal(program.run(['three-tab.txt']),'0 4 18 three-tab.txt');
};

test['wc badfile => wc: badfile: No such file or directory'] = function(){
	assert.equal(program.run(['badfile']),'wc: badfile: No such file or directory');
};

test['wc -l one.txt => 2 one.txt'] = function(){
	assert.equal(program.run(['-l','one.txt']),'2 one.txt');
};

test['wc one.txt -l => 2 one.txt'] = function(){
	assert.equal(program.run(['one.txt','-l']),'2 one.txt');
};

test['wc -c one.txt => 48 one.txt'] = function(){
	assert.equal(program.run(['-c','one.txt']),'48 one.txt');
};

test['wc one.txt -c => 48 one.txt'] = function(){
	assert.equal(program.run(['one.txt','-c']),'48 one.txt');
};

test['wc -w one.txt => 10 one.txt'] = function(){
	assert.equal(program.run(['-w','one.txt']),'10 one.txt');
};

test['wc one.txt -w => 10 one.txt'] = function(){
	assert.equal(program.run(['one.txt','-w']),'10 one.txt');
};

test['wc -l -w one.txt => 2 10 one.txt'] = function(){
	assert.equal(program.run(['-l','-w','one.txt']),'2 10 one.txt');
};

test['wc -c -l -w one.txt => 2 10 48 one.txt'] = function(){
	assert.equal(program.run(['-c','-l','-w','one.txt']),'2 10 48 one.txt');
};

test['wc -w -w -w one.txt => 10 one.txt'] = function(){
	assert.equal(program.run(['-w','-w','-w','one.txt']),'10 one.txt');
};

test['wc badfile -w => wc: badfile: No such file or directory'] = function(){
	assert.equal(program.run(['badfile','-w']),'wc: badfile: No such file or directory');
};
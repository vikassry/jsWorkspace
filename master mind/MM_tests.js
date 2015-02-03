var assert = require('assert');
var m = require('./master_mind.js').m;
var test = {};
exports.test = test;

test['the random generated code should not be float'] = function(){
	var code = m.generateCode();
	assert.equal(Math.floor(code),code);
}
test['the random generated code is five digit'] = function(){
	var code = m.generateCode();
	assert.equal(String(code).length,5);
}
test['the digits in generated code cannot contains 0 and 9'] = function(){
	var code = m.generateCode();
	
	assert.ok(m.checkBetween09(code));
}
test['checking user input all are correct'] = function(){
	var code = m.generateCode(12345);
	var result = m.compareUserInput(code, 12345);
	var ob = {present:0, correct:5};
	assert.deepEqual(ob,result);
}
test['checking user input 3 are correct, 1 are present'] = function(){
	var code = m.generateCode(12345);
	var result = m.compareUserInput(code, 72145);
	var ob = {present:1, correct:3};
	assert.deepEqual(ob,result);
}
test['checking user input 2 present'] = function(){
	var code = m.generateCode(12345);
	var result = m.compareUserInput(code,67812);
	var ob = {present:2, correct:0};
	assert.deepEqual(ob,result);
}
test['check user input if generated code contains same number'] = function(){
	var code = m.generateCode(12245);
	var result = m.compareUserInput(code,67812);
	var ob = {present:2, correct:0};
	assert.deepEqual(ob,result);
}
test['check user input if generated code contains same number and also in user input'] = function(){
	var code = m.generateCode(12245);
	var result = m.compareUserInput(code,27812);
	var ob = {present:3, correct:0};
	assert.deepEqual(ob,result);
}
test['check user input contains repeated numbers'] = function(){
	var code = m.generateCode(12345);
	var result = m.compareUserInput(code,12254)
	assert.deepEqual(result,{present:2, correct:2});
}
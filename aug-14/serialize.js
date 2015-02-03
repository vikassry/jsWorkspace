var student = {
	name:'Boley',
	age:5,
	talk: function(){return 'hello';}
};
console.log(student.talk());

var text = JSON.stringify(student);
console.log(text.length);

student.age = 6;

var anotherStudent = JSON.parse(text);
console.log(anotherStudent);

var newText = '[1,2,3,4,{"a":45}]';
var obj = JSON.parse(newText);
console.log(obj[4].a);

var square = function(x){
	return x*x;
};

var sqText = square.toString();
console.log(sqText);
eval('var sq = '+sqText);
console.log(sq(3));

console.log(JSON.parse('"hello"'));

var x = ['v','k','s','a','a'];
var y = ['i','a','h','m','l'];
var c = [];

for(i = 0;i<y.length; i++){
  c.push(x[i]+y[i]);
};
console.log(c.join(''));


function get_notes(amount){
	var arr_notes = [1000,500,100,50,20,10,5,2,1];
	var new_notes = [];
	for(var i = 0; i<arr_notes.length; i++) {
		if(Math.floor(amount/arr_notes[i]) > 0)
			new_notes.push((arr_notes[i]+':'+Math.floor(amount/arr_notes[i])));
		amount = amount % arr_notes[i];
	};	
	return new_notes.join();
};
console.log(get_notes(+process.argv[2]));

var a = [1,2,3,4,5,6];
var b = [6,5,4,3,2,1];
function add(x,index){
	return x + b[index];
};
console.log(a.map(add));
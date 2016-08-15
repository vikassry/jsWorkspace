var r = {};
exports.r = r;
//Dont use for/while/do loops

// r.Set = function(){
// 	var set = {};
// 	var this.set_elements = Array.prototype.slice.call(arguments,0)
// 	set_elements.forEach(function(val){ Object.defineProperty(set,val,{enumerable:true})});
// 	Object.defineProperties(set,{
// 		union : {
// 			value : function(new_set){
// 				var result = Object.keys(set).concat(Object.keys(new_set));
// 				return r.Set.apply(null,result);
// 			}
// 		},
// 		isEqualTo : {
// 			value : function(new_set){
// 				return Object.keys(set).toString() == Object.keys(new_set).toString();
// 			}
// 		},
// 		toString : {
// 			value : function(){
// 				return 'Set{'+ set_elements.map(function(s){return s.join();}).join('; ') + '}' ;	
// 			},			
// 			enumerable : false
// 		},
// 		intersection : {
// 			value : function(new_set){
// 				return (new_set==set) ? set : find_intersections(set, new_set, r.Set)
// 			},
// 			enumerable : false
// 		},
// 		cardinality : {
// 			value : get_cardinality(set_elements)
// 		}
// 	});
// 	return set;
// };

var find_intersections = function(set1, set2, object){
	if (set1.isEqualTo(set2)) return set1;
	var intersects = [];
	Object.keys(set1).forEach(function(element1){
		Object.keys(set2).forEach(function(element2){
			(element1 == element2) && intersects.push(element1);
		});
	});
	return object.apply(null, intersects);
};


r.Set = function(){
	this.set_elements = Array.prototype.slice.call(arguments,0)
	this.set = Array.prototype.reduce.call(arguments,function(prev, curr){
		prev[curr] = undefined; return prev;
	}, {});
};

r.Set.prototype = {
	union :  function(new_set){
		if (new_set == this) return new_set;
		var result = Object.keys(this.set).concat(Object.keys(new_set.set));
		return r.Set.apply(null,result);
	},
	isEqualTo : function(new_set){
		return Object.keys(this).toString() == Object.keys(new_set).toString();
	},
	toString : function(){
		return 'Set{' + this.set_elements.map(function(s){ return s.join() }).join('; ') + '}' ;	
	},
	intersection : function(new_set){
		return (new_set == this) ? new_set : find_intersections(this, new_set, r.Set)
	},
	cardinality : function(){		// TODO: try with getter
		var cardinality = [];
		this.set_elements.forEach(function(value){
			(cardinality.indexOf(value) < 0) && cardinality.push(value);
		});
		return cardinality.length;
	}
};

r.Sets = {
	phi: new r.Set()
};


r.Template = function(templateText){
	var resolveTemplateWith = function(bag){
		return Object.keys(bag).reduce(function(str,key){
			return str.replace(RegExp(key,'g'), bag[key]);
		}, templateText);
	};

	Object.defineProperty(resolveTemplateWith, "apply", { value : function(bag){ return resolveTemplateWith(bag) },enumerable : false } );
	return resolveTemplateWith;
};

r.findBestVowelWord = function(words){
	return words.reduce(function(word1,word2){
		return (r.getVowelCount(word1) >= r.getVowelCount(word2))? word1 : word2;
	});
};

r.findWorstVowelWord = function(words){
	return words.reduce(function(word1,word2){
		return (r.getVowelCount(word1) <= r.getVowelCount(word2)) ? word1 : word2;
	});
};

r.compare = {
	points : function(point1,point2){
		var length1 = Math.sqrt(Math.pow(point1.x - 0,2) + Math.pow(point1.y - 0,2));
		var length2 = Math.sqrt(Math.pow(point2.x - 0,2) + Math.pow(point2.y - 0,2));
		return (length1 - length2);
	},
	numbers : function(number1,number2){
		return number1 - number2;
	},
	numbers_descending : function(number1,number2){
		return number2 - number1;
	},
	strings : function(str1,str2){
		return (str1.toLowerCase() < str2.toLowerCase()) ? -1 : 1;
	},
	strings_by_length : function(str1,str2){
		return (str1.length - str2.length);
	},
	strings_by_vowel_count : function(str1,str2){
		return r.getVowelCount(str1) - r.getVowelCount(str2);
	},
	circles : function(circle1,circle2){
		return circle1.area - circle2.area;
	},
	numbers_odd_even:function(number1,number2){
		return ((number1%2 == 0 && number2%2 == 0) || (number1%2 != 0 && number2%2 !=0)) ?
		 number1 - number2 : (number1 % 2 != 0) ? - 1 : 1;
	},
	numbers_by_total_factors : function(number1,number2){
		return r.factors(number1).length - r.factors(number2).length;
	},
	short_strings : function(str1,str2){
		return str2.length - str1.length;
	}
};

r.to = {
	round_25_paise : function(value){
		var chaarana = 0.25;
		var r = value % chaarana;
		return (r <= chaarana / 2) ? (value - r) : (value - r + chaarana);
	},
	day : function(date){
		var date = new Date(date);
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		return days[date.getDay()];
	},
	nextDay : function(date){
        date = new Date(date);
        date.setDate(date.getDate()+1);
        var dd = date.getDate();
        var mm = date.getMonth()+1;
        var yy = date.getFullYear();
        return (mm > 9 && dd > 9) && (yy +'-'+ mm +'-'+ dd) || (yy +"-0"+ mm +"-0"+ dd);
    }
};

r.is = {
	the_point_on : function(ob) {
		return function(point){
			if(typeof ob.radius =='number')
				return (Math.sqrt(Math.pow(ob.centre.x - point.x, 2) + Math.pow(ob.centre.y - point.y, 2)) == ob.radius);
			var d1 = Math.sqrt(Math.pow(ob.start.x - point.x, 2) + Math.pow(ob.start.y - point.y, 2));
			var d2 = Math.sqrt(Math.pow(ob.end.x - point.x, 2) + Math.pow(ob.end.y - point.y, 2));
			return (ob.length == d1 + d2)
			}
		},
	greater_than_previous_number : function(number1,number2){
		return (number1 > number2);
	}
};

r.sumOfDigits = function(number){
	var new_number = number.toString().split('')
	return new_number.reduce(function(x,y) { return +x + +y});	
};

r.switch=function(next,task){
		return (typeof(next) =='function') ? task[next()]() : task[next]();
};

r.do = function(funref){
	var Do = {};
	Do.while = function(condition){
		if(condition() == false)
			funref();
		var while_func = function(condition){
			if(condition()){
				funref();
				while_func(condition);
			}
		}
		return while_func(condition);
	};
	Do.until = function(condition){
		funref();
		return (condition() == false) && Do.until(condition);
	}
	Do.if = function(condition){
		(condition() == true) && funref();
	}
	Do.unless = function(condition){
		(condition() == false) && funref();
	}
	Object.defineProperties(Do,{
		"while" : {enumerable:false},
		"until" : {enumerable:false},
		"if" : {enumerable:false},
		"unles" : {enumerable:false}
	});
	return Do;
};

var initalize = function(init){
 	init();
 	return function(){ };
}
r.for = function(init,check,next){
	init = initalize(init);
	return {
		do : function(action){
		if(check()){
			action();
			next();
			return r.for(init,check,next).do(action);
		   }
		}
	}
};

r.while = function(funref1){
	var While = {
		do : function(funref2){
			if(funref1()){
				funref2();
				return While.do(funref2);
			}
		}
	}
	return While;
};

r.until = function(funref1){
	var until = {};
	until.do = function(funref2){
		if(!funref1()){
			funref2();
			return until.do(funref2);
		}
	};
	return until;
};

r.factorial = function(number){
	return (number <= 1) ? 1 : (number * r.factorial(number - 1));
};

r.calculate = function(math_expression_in_string){
	return eval(math_expression_in_string).toString();
};

r.getVowelCount = function(word){
	return (word.match(/[aeiou]/gi) || []).length;
};

r.decodeList = function(text){
	return (Array.isArray(text)) ? r.reverseText(text.join(' ')) : r.reverseText(text);
};

r.reverseWords = function(words){
	return words.split(' ').map(r.reverseText).join(' ');
};

r.StringFunc = function(text,number){
	return (number == 1) ? text : text+'-'+ r.StringFunc(text,number - 1);
};
var handleobj = function(input){
	return (Array.isArray(input)) ? ((input.length > 0) ? 'seeya'+ ' '+input.join('_') : 'seeya') : 
	 ((Object.keys(input).length > 0) ? 'hi'+' '+(Object.keys(input).join()) : 'hi');
};
var handleObjects = function(input){
	return (input == null) ? 'oh no' : handleobj(input); 
};
var handleNumbers = function(input){
	if(isNaN(input))
		return 'hey dont count';
	if(input == Infinity)
		return 'get out of the world';
	return (input % 1 == 0) ? 'hey count': 'hey decimal';
};

r.welcome = function(input,number){
	if(!number){
		var welcome_typeof_object = {
			boolean : function(){ return 'to be or not to be'},
			function : function(){ return 'call that'},
			string : function(){ return 'hello text'},
			undefined : function(){ return 'who is it'},
			object : function(){ return handleObjects(input)},
			number : function(){ return handleNumbers(input)}
		};
		return welcome_typeof_object[typeof input]();
	}
	return r.StringFunc(input,number);
};	

r.Point = function(x,y){
	var point = {};
	point.x = x;
	point.y = y;
	point.isEqualTo = function(p){
		return (JSON.parse(this.x.toFixed(3)) == JSON.parse(p.x.toFixed(3)) && 
		JSON.parse(this.y.toFixed(3))==JSON.parse(p.y.toFixed(3)))
	};
	point.isOn = function(line){
		if(typeof(line.end) =='object'){		   // for line
			var d1 = Math.sqrt(Math.pow(line.start.x - point.x, 2) + Math.pow(line.start.y - point.y, 2));
			var d2 = Math.sqrt(Math.pow(line.end.x - point.x, 2) + Math.pow(line.end.y - point.y, 2));
			return(line.length == d1 + d2);
		}
		return (Math.sqrt(Math.pow(line.centre.x - point.x,2) + Math.pow(line.centre.y - point.y,2)) == line.radius);
	};
	point.compareDistance = function(point1,point2){
		var length1 = Math.sqrt(Math.pow(point1.x-point.x,2) + Math.pow(point1.y-point.y,2));
		var length2 = Math.sqrt(Math.pow(point2.x-point.x,2) + Math.pow(point2.y-point.y,2));
		return (length1 - length2);
	};
	point.toString = function(){
		return '[Point @x:'+ point.x +',y:'+ point.y +']';
	}
	Object.defineProperties(point,{
		isEqualTo:{ enumerable:false},
		isOn:{enumerable:false},
		compareDistance:{enumerable:false},
		x:{writable:false},
		toString:{enumerable:false},
		y:{writable:false}
	});
	return point;
};

r.Circle = function(centre,radius){
	var c = {
		centre : centre,
		radius : radius,
		area : radius*radius*22/7,
		perimeter : 2*22/7*radius,
		overlaps : function(other_circle){
			return (Math.sqrt(Math.pow(this.centre.x- other_circle.centre.x, 2) + 
				Math.pow(this.centre.y - other_circle.centre.y, 2)) < (this.radius + other_circle.radius));
		},
		hasPoint : function(point){
			return (Math.sqrt(Math.pow(c.centre.x-point.x,2) + Math.pow(c.centre.y-point.y,2)) == c.radius);
		},
		moveTo : function(other_centre){
			return new r.Circle(other_centre, c.radius);
		},
		covers : function(point){
			return (Math.sqrt(Math.pow(c.centre.x - point.x, 2) + Math.pow(c.centre.y - point.y, 2)) < c.radius);
		},
		toString : function(){
			return '[Circle @' + c.centre.x + ',' + c.centre.y + ' radius:' + c.radius + ']';
		} 
	};
	 Object.defineProperties(c,{
	 	centre : {writable : false},
	 	radius : {writable : false},
	 	area : {writable : false, enumerable : false},
	 	perimeter : {writable : false, enumerable : false},
	 	overlaps : {enumerable : false},
	 	hasPoint : {enumerable : false},
	 	moveTo : {enumerable : false},
	 	covers : {enumerable : false},
	 	toString : {enumerable : false} 
	 });
	return c;
}; 

r.createRectangle = function(start_point,end_point){
	var rectangle = {
		length : end_point[0],
		width : end_point[1],
		area : end_point[0] * end_point[1],
		perimeter : 2 * (end_point[0] + end_point[1]),
		hasPoint: function(point){
			return ((point[0]>=start_point[0] && point[0]<=end_point[0]) && (point[1]>=start_point[1] && point[1]<=end_point[1]))
		},
		moveTo:function(point){
			return new r.createRectangle(start_point,end_point);
		}
	}; 
	Object.defineProperties(rectangle,{
		length : {writable : false},
		width : {writable : false},
		area : {writable : false},
		perimeter : {writable : false}
	});
	return rectangle;
};

r.validatePositiveNumber = function(number){
	if(number < 0)
 		throw new Error("negative");
	if(isNaN(number))
		throw new Error('not a number');
	if(number%1 != 0)
		throw new Error('decimal');
};

r.createNewArray = function(length,value){
	var array = [];
	if(!length && !value)
		return array;
	if(length && !value){
		array.length = length;
		return array;
	}
	var new_object = JSON.parse(JSON.stringify(value));
	function copy(n){
		if(n == 0)
			return;
		array[n-1] = new_object;
		copy(n - 1);
	}
	copy(length);
	return array;
};

r.Line = function(a,b){
	var line_ob = {};
	line_ob.start = a;
	line_ob.end = b;

	line_ob.findX = function(x){
		return (x < line_ob.start.x || x >= line_ob.end.y) ? null :  x - (x / b.y);
	}; 
 	line_ob.findY = function(y){
		return (y < line_ob.start.y || y >= line_ob.end.y) ? null : y + (y / b.x);
	};
	line_ob.length = Math.sqrt(Math.pow(line_ob.start.x - line_ob.end.x, 2) + Math.pow(line_ob.start.y - line_ob.end.y, 2));
	
	line_ob.toString = function(){
		return "[Line from " + line_ob.start.x + "," + line_ob.start.y + " to " + line_ob.end.x+"," + line_ob.end.y + "]";
	};
	line_ob.hasPoint = function(point){
		var d1 = Math.sqrt(Math.pow(line_ob.start.x - point.x, 2) + Math.pow(line_ob.start.y - point.y, 2));
		var d2 = Math.sqrt(Math.pow(line_ob.end.x - point.x, 2) + Math.pow(line_ob.end.y - point.y, 2));
		return (line_ob.length.toFixed(4) == (d1 + d2).toFixed(4));
	};
	line_ob.slope = (line_ob.end.y - line_ob.start.y) / (line_ob.end.x - line_ob.start.x);
	
	line_ob.findPointFromStart=function(d){
		var p_x = line_ob.start.x + (d/(Math.sqrt(1 + Math.pow(line_ob.slope,2)))); 
		var p_y = line_ob.slope * p_x;
		return new r.Point(p_x,p_y);
	};
	line_ob.findPointFromEnd = function(d){
		var p_x = line_ob.end.x - (d /(Math.sqrt(1 + (Math.pow(line_ob.slope, 2)) )) ); 
		var p_y = line_ob.slope * p_x; 
		return new r.Point(p_x, p_y);
	};  
	line_ob.split = function(){
		var mid_point_x = (line_ob.end.x - line_ob.start.x)/2;
		var mid_point_y = (line_ob.end.y - line_ob.start.y)/2;
		var mid_point = new r.Point(mid_point_x, mid_point_y);
		var splitted_line = [new r.Line(line_ob.start, mid_point), new r.Line(mid_point, line_ob.end)];
		return splitted_line;
	};
	line_ob.isEqualTo = function(line){
		return (line_ob.toString() == line.toString());
	};
	line_ob.isParallelTo = function(line){
		return (line_ob.slope != line.slope) ? false : 
		((line_ob.slope == line.slope) && (line_ob.hasPoint(line.start) || line_ob.hasPoint (line.end) || 
			line.hasPoint(line_ob.start) || line.hasPoint(line_ob.end))) ? false : true;
	};
	Object.defineProperties(line_ob,{
		start:{enumerable:true},
		end:{enumerable:true}, 
		findX:{enumerable:false}, 
		findY:{
			value: line_ob.findY,
			enumerable:false
		},
		toString:{enumerable:false},
		length:{
			enumerable:false, 
			writable:false,
			configurable:false
		}, 
		hasPoint:{enumerable:false},
		findPointFromStart:{enumerable:false},
		findPointFromEnd:{enumerable:false},
		slope:{enumerable:false},
		split:{enumerable:false},
		isEqualTo:{enumerable:false},
		isParallelTo:{enumerable:false}		
	});
	return line_ob;
};

var performTask = function(boolean, arg1, arg2){
	return (boolean) ? ((typeof arg1 === 'function') ? arg1() : arg1) : ((typeof arg2 === 'function') ? arg2() : arg2);
};
r.if = function(boolean){
	return{then : function(arg1){
			return {else : function(arg2){
					return (typeof boolean == 'boolean') ? performTask(boolean, arg1,arg2) : 
					(boolean()) ? (typeof arg1 === 'function') ? arg1() : arg1 : 
					(typeof arg2 === 'function') ? arg2() : arg2;
				}
			}
		},
		only_then : function(arg){
			return(boolean) ? arg() : false;
		}
	}
};

r.fibonacci = function(number){
	return (number % 1 != 0 || number < 0) ? undefined : (number == 1 || number == 2) ?
	 number - 1 : r.fibonacci(number-1) + r.fibonacci(number-2);
};

r.resizeArray = function(array,number,object){
	if(!Array.isArray(array)) return;
	if(!number && !object) return array;
	if((number && !object) ||array.length!=0){
		array.length = number;
		return array;
	}
	var new_object = JSON.parse(JSON.stringify(object));
	function copy(n){
		if(n == 0)
			return;
		array[n-1] = new_object;
		copy(n-1);
	}
	copy(number);
	return array;
};

r.reverseText = function(word){
	return word.split('').reverse().join('');
};

r.Complex = function(a,b){
	var c = {};
	c.x = a;
	c.y = b;
	var array1 = [];
	var array2 = [];

	c.toString = function(){
		return (c.y>0) ? (c.x+'+'+c.y+'i') : (c.x)+''+(c.y)+'i';
	};
	c['*'] = function(obj){
		array1.push(c.x*obj.x, c.x*obj.y);
		array2.push(c.y*obj.y*-1, c.y*obj.x);
		return new r.Complex((array1[0]+array2[0]), (array1[1]+array2[1]));
	};
	c['+'] = function(obj){
		return new r.Complex(c.x+obj.x, c.y+obj.y);
	};
	c['-'] = function(obj){
		return new r.Complex(c.x-obj.x, c.y-obj.y);
	};
	c.isEqualTo = function(obj){
		return (c.toString() == obj.toString());
	};
	Object.defineProperties(c,{ 
		x : {value: c.x, writable:false, configurable:false},
		y: { value:c.y, writable:false, configurable:false},
		toString:{enumerable:false}, 
		'*':{enumerable:false},
		'+':{enumerable:false},
		'-':{enumerable:false},
		isEqualTo:{enumerable:false}
	});
	return c;
};

r.changeToBinary = function(number){
	return parseInt(number.toString(2));
};

r.readBinary = function(number){
	return parseInt(number,2);
};

r.changeToOctal = function(number){
	return parseInt(number.toString(8));
};

r.readOctal = function(number){
	return parseInt(number,8);
};

r.changeToHex = function(number){
	return number.toString(16); 
};

r.readHex = function(number){
	return parseInt(number,16);
};

r.impose = function(array1, array2){
	var addition = [];
	(!array2[array1.length - 1]) && (array2[array1.length - 1] = 0);
	array1.forEach(function(data,i){
		addition[i] = data + array2[i];
	});
	return addition;
};

r.add = function(array,number){
	return array.map(function(value){
		return value + number;
	});
};

r.tidyText = function(text){
	var words = text.split(' ');
	return words.filter(function(word){
		return (word != '');
	}).join(' ');
};

r.range = function(start,end,frequency){
	var range = [];
	var frequency = frequency || 1;
	function Range(start,end){
		if(start >= end)
			return;
		range.push(start);
		Range(start+frequency, end);
	}
	Range(start,end);
	return range;		
};

r.factors = function(number){
	var factors = [];
	var count = 1;
	function find_factors(n){
		if(count > n)
			return;
		(n % count == 0) && factors.push(count);
		count += 1;
		find_factors(n);
	}
	find_factors(number);
	return factors;
};

r.what_are_these = function(){
	var argument = arguments;
	var keys = Object.keys(argument);
	var result = keys.map(function(key){
		return argument[key].toString();
	}).join(' | ');
	return result;
};

r.finder = function(funref){
	var result_string = '';
	var array = [];
	function find(text){
		if(!funref){
			result_string = (result_string.toString().length > text.toString().length) ? result_string : text;
			return result_string;
		}
		array.push(text +'');
		var ans = array.reduce(function(text, result_string){
			var result = funref(text,result_string);
			(result >= 0) && (result_string = text);
			return result_string;
		});
		return ans;
	}
	return find;
};

r.operate = function(object, funref){
    var array = [];
    (typeof(funref) == "string") && (funref = object[funref]);
    Array.prototype.forEach.call(arguments,function(element,index){
        (index > 1) && array.push(element);
    });
    return (toString.call(object) == "[object Array]") ? object[funref].apply(null,array) : funref.apply(object,array);
};

r.accumulator = function(argument){
    var accumulator = {};
    accumulator.value = argument || 0;
    accumulator.add = function(){
        var elements_of_object = Array.prototype.slice.call(arguments,0);
        var addition = elements_of_object.reduce(function(element1,element2){
        	return element1 + element2;
        });
        accumulator.value = accumulator.value + addition;
    };
    accumulator.remove = function(){
    	var elements_of_object = Array.prototype.slice.call(arguments,0);
    	var subtraction = elements_of_object.forEach(function(element){
    		accumulator.value -= element;
    	}); 
    };
    accumulator.getValue = function(){
    	return accumulator.value;
    };
    return accumulator;
};
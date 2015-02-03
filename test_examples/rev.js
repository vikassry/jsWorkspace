var r = {};
exports.r = r;
//Dont use for/while/do loops
//---------------------------------------------------------------------------------------
r.Set=function(){
	var ob={};
	var arg=arguments;
	var ob_values= Object.keys(arg).map(function(key){ return arg[key];});
	ob_values.forEach(function(val){ Object.defineProperty(ob,val,{enumerable:true})});
	Object.defineProperties(ob,{
		union:{
			value:function(obj){
				var result=Object.keys(ob).concat(Object.keys(obj));
				return r.Set.apply(null,result);
			}
		},
		isEqualTo:{
			value:function(obj){
				return Object.keys(ob)==Object.keys(obj).toString();
			}
		},
		toString:{
			value:function(){
				return 'Set{'+ob_values.join('; ')+ '}' ;	
			},			
			enumerable:false
		},
		intersection:{
			value: function(obj){
				var intersects=[];
				Object.keys(ob).forEach(function(key1){
					Object.keys(obj).forEach(function(key2){
						if(key1==key2)
							intersects.push(key1);
					});
				});
				return r.Set.apply(null,intersects);
			},
			enumerable:false
		},
		cardinality:{
		value:function(){
			var arr=[];
			ob_values.forEach(function(key){
				if(arr.indexOf(key)<0)
					arr.push(key);
				})
			return arr.length;
		}()
	}
	})
	return ob;
};
//-----------------------------------------------------------------------------------------------------

r.Sets={
	phi: new r.Set()
};
//-----------------------------------------------------------------------------------------------------

r.Template=function(string){
	var template =function(bag){
		var ob_keys=Object.keys(bag);
		var str_arr=string.split(" ");
		ob_keys.forEach(function(key){
			str_arr.forEach(function(word,index){
				str_arr[index] = word.replace(key,bag[key]);
			});
		});
		var result=str_arr.join(" ");
		return result;
	};
	Object.defineProperty(template,"apply",{value:function(bag){ return template(bag);},enumerable:false});
	return template;
};
//--------------------------------------------------------------------------------------------

r.findBestVowelWord=function(words){
	return words.reduce(function(word1,word2){ 
		return (r.getVowelCount(word1)>=r.getVowelCount(word2)) ? word1 : word2;});
};
//---------------------------------------------------------------------------------------------

r.findWorstVowelWord=function(words){
	return words.reduce(function(word1,word2){
		return (r.getVowelCount(word1)<=r.getVowelCount(word2)) ? word1 : word2; });
};
//---------------------------------------------------------------------------------------------

r.compare = {
	points : function(point1,point2){
		var length1=Math.sqrt(Math.pow(point1.x-0,2)+ Math.pow(point1.y-0,2));
		var length2=Math.sqrt(Math.pow(point2.x-0,2)+ Math.pow(point2.y-0,2));
		return (length1-length2);
	},
	numbers: function(number1,number2){
		return number1-number2;
	},
	numbers_descending: function(number1,number2){
		return number2-number1;
	},
	strings: function(str1,str2){
		if(str1.toLowerCase()<str2.toLowerCase())
			return -1;
		else
			return 1;
		return 0;
	},
	strings_by_length:function(str1,str2){
		return (str1.length-str2.length);
	},
	strings_by_vowel_count:function(str1,str2){
		return r.getVowelCount(str1)-r.getVowelCount(str2);
	},
	circles: function(circle1,circle2){
		return circle1.area-circle2.area;
	},
	numbers_odd_even:function(number1,number2){
		if(number1%2==0 && number2%2==0)
			return number1-number2;
		if(number1%2!=0 && number2%2!=0)
			return number1-number2;
		if(number1%2!=0)
			return -1;
		if(number2%2!=0)
			return 1;
		return 0;
	},
	numbers_by_total_factors:function(number1,number2){
		return r.factors(number1).length - r.factors(number2).length;
	},
	short_strings: function(str1,str2){
		return str2.length-str1.length;
	}
};
//-------------------------------------------------------------------------------------------------------

r.to={
	round_25_paise: function(value){
		var r= value%0.25;
		if(r<= 0.25/2)
			return (value - r);
		return (value-r) + 0.25;
	},
	day:function(date){
		date=new Date(date);
		var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		return days[date.getDay()];
	},
	nextDay:function(date){
         date = new Date(date);
        date.setDate(date.getDate()+1);
        var dd = date.getDate();
        var mm = date.getMonth()+1;
        var yy = date.getFullYear();
        if(mm>9){
        	if(dd>9)
        		return yy+'-'+mm+'-'+dd;
        }
        return yy+"-0"+mm+"-0"+dd;
    }
};
//-------------------------------------------------------------------------------------------------------

r.is={
	the_point_on: function(ob) {
		return function(point){
			if(typeof ob.radius=='number'){
				return(Math.sqrt(Math.pow(ob.centre.x-point.x,2)+Math.pow(ob.centre.y-point.y,2))==ob.radius)				
			}
			if(typeof ob.end=='object'){
				var d1=Math.sqrt(Math.pow(ob.start.x-point.x, 2)+Math.pow(ob.start.y-point.y, 2));
				var d2=Math.sqrt(Math.pow(ob.end.x-point.x, 2)+Math.pow(ob.end.y-point.y, 2));
				return(ob.length==d1+d2)
			}
		}
	},
	greater_than_previous_number:function(number1,number2){
		return (number1>number2);
	}
};
//-----------------------------------------------------------------------------------------------------

r.sumOfDigits=function(number){
	var new_number=number.toString().split('')
	return new_number.map(function(x){return parseInt(x);}).reduce(function(x,y){return x+y;});	
};
//------------------------------------------------------------------------------------------------------

r.switch=function(next,task){
	// if(Array.isArray(task)==true){
	// 	if(typeof next=='function')
	// 		return task[next()]();
	// 	if(typeof next=='number')
	// 		return task[next]();
	// }
	if(typeof next=='string')
		return task[next]();
	if(typeof next=='function')
		return task[next()]();	
};
//---------------------------------------------------------------------------------------------------

r.do=function(fun){
		var obj={};
		obj.while=function(condition){
			if(condition()==false){
				fun();
				return;
			}
			var while_func=function(condition){
				if(condition()){
					fun();
					while_func(condition);
				}
			}
			return while_func(condition);
		};
		obj.until=function(condition){
			fun();
			if(condition()==false)
				return obj.until(condition);

		}
		obj.if=function(condition){
			if(condition()==true){
				fun();
			}

		}
		obj.unless=function(condition){
			if(condition()==false){
				fun();
			}
		}
		Object.defineProperty(obj,"while",{enumerable:false});
		Object.defineProperty(obj,"until",{enumerable:false});
		Object.defineProperty(obj,"if",{enumerable:false});
		Object.defineProperty(obj,"unles",{enumerable:false});
		return obj;
	};
//-----------------------------------------------------------------------------------------------------
 var initalize=function(init){
 	init();
 	return function(){ };
}

r.for=function(init,check,next){
	init=initalize(init);
	return{do:function(action){
		if(check()){
			action();
			next();
			return r.for(init,check,next).do(action);
		   }
			return;
		}
	}
};
//-------------------------------------------------------------------------------------------------------

r.while = function(funref1){
	var ob={};
	ob.do=function(funref2){
		if(funref1()==true){
			funref2();
			return ob.do(funref2);
		}
	}
	return ob;
};
//----------------------------------------------------------------------------------------------------------

r.until = function(funref1){
	var ob={};
	ob.do=function(funref2){
		if(funref1()==false){
			funref2();
			return ob.do(funref2);
		}
	}
	return ob;
};
//----------------------------------------------------------------------------------------------------------

r.factorial=function(number){
	if(number<=1)
		return 1;
	return (number * r.factorial (number-1));
};
//--------------------------------------------------------------------------------------------------------

r.calculate=function(math_expression_in_string){
	return eval(math_expression_in_string).toString();
};
//---------------------------------------------------------------------------------------------------------

r.getVowelCount=function(word){
	var vowels;
	vowels=word.split('').filter(function(char){
		return ['a','e','i','o','u'].indexOf(char.toLowerCase())>=0;
	});
	return vowels.length;
};
//-----------------------------------------------------------------------------------------

r.decodeList=function(text){
	if(Array.isArray(text)==true)
		return r.reverseText(text.join(' '));
	return r.reverseText(text);
};
//------------------------------------------------------------------------------------------------

r.reverseWords=function(words){
	return words.split(' ').map(r.reverseText).join(' ');
};
//------------------------------------------------------------------------------------------------

r.welcome=function(word,number){
	var x=0;
	var str="";
	if(number==undefined)
		{
			if(typeof word=='string')
				return 'hello text';
			if((parseInt(word).toString()!='NaN') && (word-Math.floor(word)==0))
				return 'hey count';
			if((parseInt(word).toString()!='NaN') && (word-Math.floor(word)!=0) && Array.isArray(word)==false)
				return 'hey decimal';
			if(typeof word=='function')
				return 'call that';
			if(typeof(word)=='undefined')
				return 'who is it';
			if(word==null)
				return 'oh no';
			if(word==Infinity)
				return 'get out of the world';
			if(word.toString()=='NaN')
				return 'hey dont count';				
			if(typeof(word)=='boolean')
				return 'to be or not to be';
			if(word.toString()=='[object Object]' && Array.isArray(word)!=true){
				if(Object.keys(word).length!=0)
					return 'hi'+' '+(Object.keys(word).join());
				return 'hi';
			}
			if(Array.isArray(word)==true){
				if(word.length!=0)
					return 'seeya'+ ' '+word.join('_');
				return 'seeya';
			}
		}
		function strfun(word,number){
			if(number==1)
				return word;
			str=word+'-'+strfun(word,number-1);
			return str;
		}
		return strfun(word,number);
};	

//-----------------------------------------------------------------------------------------

r.Point=function(x,y){
	var p={};
	p.x=x;
	p.y=y;

	p.isEqualTo=function(p){
		if(JSON.parse(this.x.toFixed(3)) == JSON.parse(p.x.toFixed(3)) && 
			JSON.parse(this.y.toFixed(3))==JSON.parse(p.y.toFixed(3)))
			return true;
	};
	p.isOn=function(l){
		if(typeof(l.end)=='object'){		   // for line
			var d1=Math.sqrt(Math.pow(l.start.x-p.x, 2)+Math.pow(l.start.y-p.y, 2));
			var d2=Math.sqrt(Math.pow(l.end.x-p.x, 2)+Math.pow(l.end.y-p.y, 2));
			if(l.length==d1+d2)
				return true;
		}
		if(typeof(l.radius)=='number'){			//for circle
			if(Math.sqrt(Math.pow(l.centre.x-p.x,2)+Math.pow(l.centre.y-p.y,2))==l.radius)
				return true;
		}
	};
	p.compareDistance=function(point1,point2){
		var length1=Math.sqrt(Math.pow(point1.x-p.x,2)+ Math.pow(point1.y-p.y,2));
		var length2=Math.sqrt(Math.pow(point2.x-p.x,2)+ Math.pow(point2.y-p.y,2));
		return (length1-length2);
	};
	p.toString= function(){
		return '[Point @x:'+p.x+',y:'+p.y+']';
	}

	Object.defineProperties(p,{
		isEqualTo:{
		enumerable:false
	}, 
	isOn:{
		enumerable:false
	},
	 compareDistance:{
	 	enumerable:false
	 },
	 x:{
	 	enumerable:true,
	 	writable:false
	 },
	 toString:{
	 	enumerable:false
	 }, 
	 y:{
	 	enumerable:true,
	 	writable:false
	 }
	});

	return p;
};
//-------------------------------------------------------------------------------------------

r.Circle=function(centre,radius){
	var c={};
	
	Object.defineProperties(c,{
	centre:{value:
		centre,
		enumerable:true
	},
	radius:{value:
		radius,
		enumerable:true
	},
	area:{value:
		radius*radius*22/7
	},
	perimeter:{value:
		2*22/7*radius
	},
	overlaps:{value:
		function(other_circle){
			if(Math.sqrt(Math.pow(this.centre.x- other_circle.centre.x, 2) + Math.pow(this.centre.y - other_circle.centre.y, 2))<(this.radius + other_circle.radius))
				return true;
			if(Math.sqrt(Math.pow(this.centre.x- other_circle.x, 2) + Math.pow(this.centre.y - other_circle.y, 2))>(this.radius + other_circle.radius))
				return false;
		},
		enumerable:false
	},
	hasPoint:{value:
		function(p){
			if(Math.sqrt(Math.pow(c.centre.x-p.x,2)+Math.pow(c.centre.y-p.y,2))==c.radius)
				return true;
			if(Math.sqrt(Math.pow(c.centre.x-p.x,2)+Math.pow(c.centre.y-p.y,2))!=c.radius)
				return false;
		},
		enumerable:false
	},
	moveTo:{value:
		function(other_centre){
			return new r.Circle(other_centre,c.radius);
		},
		enumerable:false
	},
	covers:{value:
		function(p){
			return (Math.sqrt(Math.pow(c.centre.x-p.x, 2)+ Math.pow(c.centre.y-p.y, 2))<c.radius)
		},
		enumerable:false
	},
	toString:{value:
		function(){
		return '[Circle @'+c.centre.x+','+c.centre.y+' radius:'+c.radius+']'
		},
		enumerable:false
	}
});
return c;
}; 
//-------------------------------------------------------------------------------------------

r.createRectangle=function(start_point,end_point){
	var rec={
		length:end_point[0],
		width: end_point[1],
		area: end_point[0]*end_point[1],
		perimeter: 2*(end_point[0]+end_point[1]),
		hasPoint: function(point){
			if((point[0]>=start_point[0]&&point[0]<=end_point[0]) && (point[1]>=start_point[1]&&point[1]<=end_point[1]))
				return true;
		},
		moveTo:function(point){
			return new r.createRectangle(start_point,end_point);
		}
	}
	return Object.freeze(rec);
};
//-------------------------------------------------------------------------------------------------

r.validatePositiveNumber=function(number){
	if(number<0)
 		throw new Error("negative");
	if(parseInt(number).toString()=='NaN' && parseInt(number).toString!=number.toString())
		throw new Error('not a number');
	if(number-Math.floor(number)!=0)
		throw new Error('decimal');
		
};
//------------------------------------------------------------------------------------------------

r.createNewArray=function(length,value){
	var a=[];
	if(!length && !value)
		return a;
	if(length && !value){
		a.length=length;
		return a;
	}
	var ob=JSON.parse(JSON.stringify(value));
	function copy(n){
		if(n==0)
			return;
		a[n-1]=ob;
		copy(n-1);
	}
	copy(length);
	return a;
};
//----------------------------------------------------------------------------------------------

r.Line=function(a,b){
	var line_ob={};
	line_ob.start=a;
	line_ob.end=b;

	line_ob.findX=function(x){
		if(x<line_ob.start.x || x>=line_ob.end.y)
			return null;
		return x-(x/b.y);
	};
	line_ob.findY=function(y){
		if(y<line_ob.start.y || y>=line_ob.end.y)
			return null;
		return y+(y/b.x);
	};
	line_ob.length=Math.sqrt(Math.pow(line_ob.start.x-line_ob.end.x, 2)+Math.pow(line_ob.start.y-line_ob.end.y, 2));
	
	line_ob.toString=function(){
		return "[Line from "+line_ob.start.x+","+line_ob.start.y+" to "+line_ob.end.x+","+line_ob.end.y+"]";
		
	};

	line_ob.hasPoint=function(p){
		var d1=Math.sqrt(Math.pow(line_ob.start.x-p.x, 2)+Math.pow(line_ob.start.y-p.y, 2));
		var d2=Math.sqrt(Math.pow(line_ob.end.x-p.x, 2)+Math.pow(line_ob.end.y-p.y, 2));
		return (line_ob.length.toFixed(4)==(d1+d2).toFixed(4));
	};

	line_ob.m= (line_ob.end.y-line_ob.start.y) / (line_ob.end.x-line_ob.start.x);
	
	line_ob.findPointFromStart=function(d){
		var p_x= line_ob.start.x + (d/(Math.sqrt(1+ Math.pow(line_ob.m,2)))); 
		var p_y= line_ob.m * p_x;
		return new r.Point(p_x,p_y);
	};

	line_ob.findPointFromEnd=function(d){
		var p_x= line_ob.end.x - (d /(Math.sqrt(1 + (Math.pow(line_ob.m, 2)) )) ); 
		var p_y = line_ob.m * p_x; 
		return new r.Point(p_x, p_y);
	};  

	line_ob.split=function(){
		var mid_point_x= (line_ob.end.x- line_ob.start.x)/2;
		var mid_point_y= (line_ob.end.y - line_ob.start.y)/2;
		var mid_point= new r.Point(mid_point_x, mid_point_y);
		var splitted_line=[new r.Line(line_ob.start, mid_point), new r.Line(mid_point, line_ob.end)];
		return splitted_line;
	};

	line_ob.isEqualTo=function(l){
		return (line_ob.toString()==l.toString());
	};
	line_ob.isParallelTo=function(l){
		if(line_ob.m!=l.m)
			return false;
		if((line_ob.m==l.m) && (line_ob.hasPoint(l.start) || line_ob.hasPoint (l.end) || l.hasPoint(line_ob.start) || l.hasPoint(line_ob.end)))
			return false;
		return true;
	};

	Object.defineProperties(line_ob,{
		start:{
			enumerable:true
		},
		end:{
			enumerable:true
		}, 
		findX:{
			enumerable:false
		}, 
		findY:{value:
			line_ob.findY,
			enumerable:false
		},
		toString:{
			enumerable:false
		 },
		length:{
			enumerable:false, 
			writable:false,
			configurable:false
		}, 
		hasPoint:{
			enumerable:false
		},
		findPointFromStart:{
			enumerable:false
		},
		findPointFromEnd:{
			enumerable:false
		},
		m:{
			enumerable:false
		},
		split:{
			enumerable:false
		},
		isEqualTo:{
			enumerable:false
		},
		isParallelTo:{
			enumerable:false
		}		
	});
	
	return line_ob;
};
//------------------------------------------------------------------------------------------------

r.if = function(boolean){
	return{then:function(arg1){
			return {else:function(arg2){
					if(typeof boolean != 'function'){
						if(boolean == true){
							if(typeof arg1 === 'function')
								return arg1();
							return arg1;
						}
						if(typeof arg2 === 'function')
							return arg2();
						return arg2;
					}
					if(boolean() == true){
							if(typeof arg1 === 'function')
								return arg1();
							return arg1;
						}
						if(typeof arg2 === 'function')
							return arg2();
						return arg2;
				}
			}
		},
		only_then:function(arg){
			if(boolean)
				return arg();
			return false;
		}
	}
};
//----------------------------------------------------------------------------------------------------------

r.fibonacci=function(number){
	if(number-Math.floor(number)!=0 && number<0)
		return undefined;
	var fib_array=[];
 	var a=0; var b=1;
 	if(number==1)
 		return a;
 	fib_array.push(a);
 	fib_array.push(b);
 	function fibo(a,b){
 		if(fib_array.length-1>number)
 			return;
 		fib_array.push(a+b);
 		return fibo(b,a+b);
 	}
 	fibo(a,b);
 	return fib_array[number-1];
};
//---------------------------------------------------------------------------------------------
 	
r.resizeArray=function(a,number,obj){
	if(Array.isArray(a)==true){
		if(!number && !obj)
			return a;
		if((number && !obj) ||a.length!=0){
			a.length=number;
			return a;
		} 
		var new_obj= JSON.parse(JSON.stringify(obj));

		function copy(n){
			if(n==0)
				return;
			a[n-1]=new_obj;
			copy(n-1);
		}
		copy(number);
		return a;
	}
	return a;
};
//---------------------------------------------------------------------------------------------

r.reverseText=function(word){
	return word.split('').reverse().join('');
};
//---------------------------------------------------------------------------------------------

r.Complex=function(a,b){
	var c={};
	c.x=a;
	c.y=b;
	var arr1=[]; 
	var arr2=[];
	var arr3=[];

	c.toString=function(){
		if(c.y>0)
			return c.x+''+'+'+c.y+'i'; 
		return (c.x)+''+(c.y)+'i';
	};

	c['*']=function(obj){
		arr1.push(c.x*obj.x, c.x*obj.y);
		arr2.push(c.y*obj.y*-1, c.y*obj.x);
		arr3[0]=arr1[0]+arr2[0];
		arr3[1]=arr1[1]+arr2[1];
		return new r.Complex(arr3[0],arr3[1]);
	};
	c['+']=function(obj){
		return new r.Complex(c.x+obj.x, c.y+obj.y);
	};
	c['-']=function(obj){
		return new r.Complex(c.x-obj.x, c.y-obj.y);
	};
	c.isEqualTo=function(obj){
		if(c.toString() == obj.toString())
			return true;
		return false;
	};

	Object.defineProperties(c,{x:{value:c.x,writable:false,configurable:false},y:{value:c.y,writable:false,configurable:false},
		toString:{enumerable:false}, '*':{enumerable:false},'+':{enumerable:false},'-':{enumerable:false},
		isEqualTo:{enumerable:false}});

	return c;
};
//----------------------------------------------------------------------------------------------

r.changeToBinary=function(number){
	return parseInt(number.toString(2));
};
//-----------------------------------------------------------------------------------------------

r.readBinary=function(number){
	return parseInt(number,2);
};
//----------------------------------------------------------------------------------------------

r.changeToOctal=function(number){
	return parseInt(number.toString(8));
};
//-----------------------------------------------------------------------------------------------

r.readOctal=function(number){
	return parseInt(number,8);
};
//----------------------------------------------------------------------------------------------

r.changeToHex=function(number){
	return number.toString(16); 
};
//-----------------------------------------------------------------------------------------------

r.readHex= function(number){
	return parseInt(number,16);
};
//------------------------------------------------------------------------------------------------

r.impose=function(arr1,arr2){
	var result=[];
	if(arr2[arr1.length-1]==undefined)
		arr2[arr1.length-1]=0;

	arr1.forEach(function(data,i){
		result[i]=data+arr2[i];
	});
	return result;
};
//-------------------------------------------------------------------------------------------------

r.add=function(array,number){
	return array.map(function(arr){
		return arr+number;
	});
};
//--------------------------------------------------------------------------------------------------

r.tidyText=function(string){
	var str=string.split(' ');
	return str.filter(function(word){
		if(word.toString()!='')
			return true;
	}).join(' ');
};
//----------------------------------------------------------------------------------------------------

r.range=function(start,end,freq){
	var range_arr=[];
	if(!freq){
		freq = 1;
	}
	function R(start,end){
		if(start>=end)
			return;
		range_arr.push(start);
		R(start+freq, end);
	}
	R(start,end);
	return range_arr;		
};
//------------------------------------------------------------------------------------------------------

r.factors=function(number){
	var factors=[];
	var count=1;
	function find_factors(n){
		if(count>n)
			return;
		if(n%count==0)
			factors.push(count);
		count+=1;
		find_factors(n);
	}
	find_factors(number);
	return factors;
};
//----------------------------------------------------------------------------------------------------------

r.what_are_these= function(){
	var result='';
	var n=0;
	var a=arguments;
	function convert_tostring(){
		if(n>=a.length)
			return;
		result+=a[n].toString()+' | ';
		n++; 
		convert_tostring();
	}
	convert_tostring();
	var final_string=result.split('');
	final_string.splice(-3);
	return final_string.join('');
};
//--------------------------------------------------------------------------------------------------------------

r.finder=function(funref){
	var str='';
	var arr=[];
	function find(text){
		if(!funref){
			str = (str.toString().length > text.toString().length) ? str:text;
			return str;
		}
		else{
			arr.push(text+'');
			var ans = arr.reduce(function(text, str){
				var result = funref(text,str);
				if(result>=0)
					str=text;
				return str;
			});
			return ans;
		}
	}
	return find;
};
//----------------------------------------------------------------------------------------------------------------

r.operate = function(){
    var object=arguments[0];
    var funref=arguments[1];
    if(typeof(funref)=="string")
        funref = object[funref];
    var arr=[];
    Array.prototype.forEach.call(arguments,function(ele,index,array){
        if(index>1)
            arr.push(ele);
    });
    if(toString.call(object)=="[object Array]")
        return object[funref].apply(null,arr);
    return funref.apply(object,arr);
};
//---------------------------------------------------------------------------------------------------------------

r.accumulator = function(argu){
    var ob = {};
    ob.value = 0;
    if(argu != undefined)
        ob.value=argu;
    ob.add=function(){
        var arg=arguments;
        var value_of_object=Object.keys(arg).map(function(ele){return arg[ele];});
        var add = value_of_object.reduce(function(x,y){
                    return x+y; });
        
        ob.value=ob.value+add;
    };
    ob.remove=function(){
        var arg=arguments;
        var value_of_object=Object.keys(arg).map(function(ele){return arg[ele];});
        var sub= value_of_object.forEach(function(x){
                    ob.value -= x; }); 
    };
    ob.getValue=function(){
        return ob.value;
    };
    return ob;
};
//----------------------------------------------------------------------------------------------------------------
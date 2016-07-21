var r = require('./revision.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.there_are_no_special_fields_do_while_if_for_switch = function (){
	assert.equal(Object.keys(r.do).length,0);
	assert.equal(Object.keys(r.while).length,0);
	assert.equal(Object.keys(r.if).length,0);
	assert.equal(Object.keys(r.switch).length,0);
	assert.equal(Object.keys(r.for).length,0);
};
test.welcome_responds_with_hello_text_for_text = function (){
	assert.equal('hello text', r.welcome('hmm'));
	assert.equal('hello text', r.welcome('Here I am'));
	assert.equal('hello text', r.welcome('42'));
	assert.equal('hello text', r.welcome(''));
};
test.fibonacci_finds_the_nth_fibonacci_number = function (){
	var fibonacci = r.fibonacci;
	assert.equal(0,fibonacci(1));
	assert.equal(1,fibonacci(2));
	assert.equal(1,fibonacci(3));
	assert.equal(3,fibonacci(5));	
};
test.two_complexNumbers_can_be_equal = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	assert.ok(a.isEqualTo(a));
	var b = new Complex(1,2);
	assert.ok(a.isEqualTo(b));
	var c = new Complex(3,4);
	assert.ok(!a.isEqualTo(c));
	assert.ok(!c.isEqualTo(a));
	assert.ok(!b.isEqualTo(c));
	var d = new Complex(1,3);
	assert.ok(!a.isEqualTo(d));
	var e = new Complex(2,1);
	assert.ok(!b.isEqualTo(e));	
};
test.reverseText_reverses_given_text_with_spaces = function (){
	var x = "hello. hello.";
	var y = ".olleh .olleh";
	assert.equal(r.reverseText(x),y);
};
test.intersection_of_same_sets_results_in_itself = function (){
	var Set = r.Set;
	var c = new Set(2,3,4,5);
	var d = c.intersection(c);
	assert.ok(d instanceof Set);
	assert.ok(d.isEqualTo(c));
};
test.find_sum_of_digits = function (){
	assert.equal(r.sumOfDigits(123),6);
	assert.equal(r.sumOfDigits(4213),10);
	assert.equal(r.sumOfDigits(99976),40);
};
test.findX_gives_y_coordinate_of_a_line_only_inside = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(0.75,a.findX(1).toFixed(4));
	assert.equal(1.125,a.findX(1.5).toFixed(4));
	assert.equal(null,a.findX(5));
	assert.equal(null,a.findX(-1));
};
test.create_a_set_with_duplicate_members = function (){
	assert.equal(1,new r.Set(2,2).cardinality);
	assert.equal(5,new r.Set('a','b','c',1,2,'a',2).cardinality);
};
test.point_has_only_two_fields = function (){
	assert.deepEqual(Object.keys(new r.Point(3,4)),['x','y']);
};
test.intersection_of_disjoint_sets_is_empty_set = function (){
	var Set = r.Set;
	var a = new Set(1,2);
	var b = new Set(3,4);
	var c = r.Sets.phi;
	var d = a.intersection(b);
	assert.ok(d instanceof Set);
	assert.ok(d.isEqualTo(c));
};
test.union_with_iteself_set_gives_the_same_set = function (){
	var a = new r.Set(1,2,3);
	assert.ok(a.union(a).isEqualTo(a));
};
test.hasPoint_checks_if_point_is_in_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.ok(a.hasPoint({x:0,y:0}));
	assert.ok(a.hasPoint({x:3,y:4}));
	assert.ok(!a.hasPoint({x:3,y:5}));
	assert.ok(!a.hasPoint({x:-1,y:0}));
	assert.ok(!a.hasPoint({x:2.8,y:3.6}));
	assert.ok(!a.hasPoint({x:0.1,y:0.5}));
};
test.range_gives_all_numbers_in_range = function (){
	//Dont use loops
	assert.deepEqual(r.range(1,5),[1,2,3,4]);
	assert.deepEqual(r.range(2,5),[2,3,4]);
	assert.deepEqual(r.range(-5,1),[-5,-4,-3,-2,-1,0]);
};
test.add_data_to_accumulator = function (){
	var a = new r.accumulator;
	r.operate(a,a.add,5);	
	var getValue = function(){return this.value;}
	assert.deepEqual(5,r.operate(a,getValue));
};
test.impose_adds_items_only_if_present_in_first_array = function (){
	var x = [1,2];
	var y = [4,5,6];
	var z = [5,7];
	assert.deepEqual(r.impose(x,y),z);
};
test.tidyText_removes_extra_spaces_between_words = function (){
	var x = 'The  world    is a very    wide space.  ';
	var y = 'The world is a very wide space.';
	assert.deepEqual(r.tidyText(x),y);
};
test.welcome_responds_with_multiple_texts_with_two_arguments = function (){
	assert.equal('goldy-goldy-goldy-goldy-goldy',r.welcome('goldy',5));
	assert.equal('a-a-a-a-a-a-a',r.welcome('a',7));
	assert.equal('b-b',r.welcome('b',2));
};
test.sort_numbers_in_ascending_order_with_odd_before_even = function (){
	var compare = r.compare;
	var a = [10,2,13,1,0,5,49];
	assert.deepEqual(a.sort(compare.numbers_odd_even),[1,5,13,49,0,2,10]);
	var b = [1,-2,13,-20,4];
	assert.deepEqual(b.sort(compare.numbers_odd_even),[1,13,-20,-2,4]);
};
test.add_1_increments_allItems = function (){
	var x = [9,8,42,31,12];
	var y = [10,9,43,32,13];
	assert.deepEqual(r.add(x,1),y);
};
test.sort_numbers_by_number_of_factors_they_have = function (){
	var a = [1,2,6,8,9,24,25,27,29,33,66,52,50,989];
	var b = [10,20,25,50,101];
	assert.deepEqual(a.sort(r.compare.numbers_by_total_factors),[1,2,29,9,25,33,6,8,989,27,52,50,24,66]);
	assert.deepEqual(b.sort(r.compare.numbers_by_total_factors),[101,25,10,20,50]);
};
test.union_with_empty_set_gives_the_same_set = function (){
	var Set = r.Set;
	var a = new Set(1,2);
	var b = a.union(r.Sets.phi);
	assert.ok(b.isEqualTo(a));
};
test.finders_are_independant = function (){
	var findOneWithManyFactors = new r.finder(r.compare.numbers_by_total_factors);
	var findHighest = new r.finder(r.compare.numbers);
	[1,2,6,8,9,24,25,27,29,33,66,52,50,989].forEach(findOneWithManyFactors);
	assert.equal(findOneWithManyFactors(1),24);
	[0,2,-5].forEach(findHighest);
	assert.equal(findHighest(-1),2);	
};
test.welcome_responds_with_hey_count_for_numbers = function (){
	assert.equal('hey count', r.welcome(2));
	assert.equal('hey count', r.welcome(420));
	assert.equal('hey count', r.welcome(0));
	assert.equal('hey count', r.welcome(-25));
};
test.there_are_no_special_fields_on_function = function (){
	var f = function(){};
	assert.equal(Object.keys(f.__proto__),0);	
};
test.dogs_can_fly_if_they_have_wings = function (){
	var bird = {hasWings:true};
	var parrot = Object.create(bird);
	var dog = {};
	var canFly = function(){return this.hasWings;}
	assert.ok(r.operate(bird,canFly));
	assert.ok(r.operate(parrot,canFly));
	assert.ok(!r.operate(dog,canFly));	
	var giveWings = function(){this.hasWings = true;}
	r.operate(dog,giveWings);
	assert.ok(r.operate(dog,canFly));
};
test.create_a_Circle_of_a_given_dimension_at_given_place = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.equal(7,a.radius);
	assert.equal(154,a.area);
	assert.equal(44,a.perimeter);
	assert.deepEqual({x:0,y:0},a.centre);
};
test.complex_numbers_can_be_multiplied = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2), b = new Complex(2,3), c = new Complex(-4,7);
	var d = a['*'](b);
	assert.ok(d instanceof Complex);
	assert.equal(d,'-4+7i');
	assert.ok(d.isEqualTo(c));
};
test.sort_strings_in_alphabetical_order = function (){
	var a =['hello','how','are','you'];
	assert.deepEqual(a.sort(r.compare.strings),["are","hello","how","you"]);
	var b = ['good','mornings','are','good','or','not'];
	assert.deepEqual(b.sort(r.compare.strings),["are","good","good","mornings","not","or"]);	
};
test.fibonacci_returns_undefined_for_decimal_numbers = function (){
	var fibonacci = r.fibonacci;
	assert.equal(undefined,fibonacci(-0.5));
	assert.equal(undefined,fibonacci(5.85));	
};
test.decodeList_decodes_the_text_written_in_reverse_in_list = function (){
	var x = ['.doog','si','sihT'];
	var y = "This is good.";
	var z = ['.doog','si','sihT'];
	assert.equal(r.decodeList(x),y);
	assert.deepEqual(x,z);
};
test.resizeArray_adds_elements_of_given_value_to_existing_array = function (){
	var a = [];
	r.resizeArray(a,2,25);
	assert.deepEqual(a.length,2);
	assert.equal(a[0],25);
	assert.equal(a[1],25);
};
test.for_simulates_the_for_loop = function (){
	var i,text='';
	var items = [];
	var init = function(){i=0};
	var check = function(){return i<5};
	var next = function(){i++};
	var action = function(){text +='a'};
	var anotherAction = function(){items.unshift(i)};
	r.for(init,check,next).do(action);
	assert.equal(text,'aaaaa');
	r.for(init,check,next).do(anotherAction);
	assert.deepEqual(items,[4,3,2,1,0]);
};
test.overlapping_lines_are_not_parallel = function (){
	var c = new r.Line({x:0,y:0},{x:4,y:4});
	var d = new r.Line({x:1,y:1},{x:3,y:3});
	assert.ok(false === d.isParallelTo(c));
	assert.ok(false === c.isParallelTo(d));
};
test.findY_gives_y_coordinate_of_a_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(2.6667,a.findY(2).toFixed(4));
	assert.equal(4,a.findY(3).toFixed(4));
	assert.equal(1.3333,a.findY(1).toFixed(4));
	assert.equal(2,a.findY(1.5).toFixed(4));
};
test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels_ignoring_case = function (){
	var x = ['A','dry','sky','is','a','dry','sky'];
	var y = 'A';
	assert.equal(r.findBestVowelWord(x),y);
};
test.do_performs_action_once_if_condition_is_not_set = function (){
	//Dont use any loops to implement this
	var count=10;
	var countIsLessThan10 = function(){return count<10;}
	var incrementCount = function(){count++;}
	r.do(incrementCount).while(countIsLessThan10);
	assert.equal(11,count);
};
test.complex_numbers_modulus_is_a_real_number = function (){
	var Complex = r.Complex;
	var a = new Complex(35,-12), b = new Complex(65,72); 
	assert.equal(a.modulus,37);
	assert.equal(b.modulus,97);
};
test.find_a_point_at_a_distance_from_the_start_of_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	var b = a.findPointFromStart(2.5);
	var c = a.findPointFromStart(0);
	assert.ok(b instanceof r.Point);
	assert.ok(c instanceof r.Point);
	assert.deepEqual(b,{x:1.5,y:2});
	assert.deepEqual(c,{x:0,y:0});
};
test.there_is_no_do_method_on_boolean = function (){
	var b = true;
	assert.equal(Object.keys(b.__proto__),0);	
};
test.readOctal_reads_text_as_octal = function (){
	assert.equal(0,r.readOctal('0'));
	assert.equal(1,r.readOctal('1'));
	assert.equal(8,r.readOctal('10'));
	assert.equal(513,r.readOctal('1001'));
	assert.equal(299593,r.readOctal('1111111'));
};
test.readHex_reads_text_as_octal = function (){
	assert.equal(123,r.readHex('7b'));
	assert.equal(255,r.readHex('ff'));
	assert.equal(1023,r.readHex('3ff'));
};
test.resizeArray_removes_elements_from_existing_array = function (){
	var a = [1,2];
	r.resizeArray(a,1);	
	assert.equal(a.length,1)
	assert.equal(a[0],1);	
};
test.welcome_responds_with_get_out_for_infinite_answers = function (){
	var x = 0;
	assert.equal('get out of the world',r.welcome(1/0));
	assert.equal('get out of the world',r.welcome(12*42/x));
};
test.resizeArray_adds_elements_of_given_object_to_existing_array = function (){
	var a = [];
	r.resizeArray(a,1,{a:1});
	assert.deepEqual(a.length,1);
	assert.deepEqual(a[0],{a:1});	
};
test.operate_by_name_on_accumulator = function (){
	var a = new r.accumulator(27);
	r.operate(a,'remove',5,6,7,-8);	
	var getValue = function(){return this.value;}
	assert.deepEqual(17,r.operate(a,getValue));
	r.operate(a,'add',5,6,7,8);		
	assert.deepEqual(43,r.operate(a,getValue));
};
test.library_does_not_export_more_than_What_is_needed = function (){
	assert.ok(Object.keys(r).length<57);
};
test.complex_numbers_can_be_divided = function (){
	var Complex = r.Complex;
	var a = new Complex(2,3), b = new Complex(3,4), c = new Complex(.72,.04);	
	var d = a['/'](b);
	assert.ok(d instanceof Complex);
	assert.ok(d.isEqualTo(c),d);	
	assert.equal(d,'0.72+0.04i');
	var e = d['*'](b);
	assert.ok(e instanceof Complex);
	assert.ok(e.isEqualTo(a));
	var f = new Complex(4,5)['/'](new Complex(3,4));
	assert.equal('1.28-0.04i',f);
};
test.line_can_be_split_into_two = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(a.length,5);
	var lines = a.split();
	assert.ok(lines.every(function(line){return line instanceof r.Line;}));
	assert.equal(lines[0].length,2.5);
	assert.equal(lines[1].length,2.5);
	var b = new r.Line({x:0,y:0},{x:1.5,y:2});
	var c = new r.Line({x:1.5,y:2},{x:3,y:4});
	assert.ok(lines[0].isEqualTo(b));
	assert.ok(lines[1].isEqualTo(c));
};
test.impose_adds_individual_items_of_two_equal_sized_arrays = function (){
	var x = [1,2,3];
	var y = [4,5,6];
	var z = [5,7,9];
	assert.deepEqual(r.impose(x,y),z);
};
test.getVowelCount_gets_the_count_of_vowels_with_capital_letters = function (){
	assert.equal(r.getVowelCount('Owl'),1);
	assert.equal(r.getVowelCount('cOOling'),3);
	assert.equal(r.getVowelCount('I am not'),3);
};
test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array = function (){
	var o = {a:1};
	var a = [];
	r.resizeArray(a,2,o);
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],o);//values are same
	assert.deepEqual(a[1],o);
	assert.notEqual(a[0],o);//not same object
	assert.notEqual(a[1],o);
};
test.calculate_calculates_the_value_of_an_expression = function (){
	assert.ok('52' === r.calculate('(4*5+32)'));
	assert.ok('13' === r.calculate('(4*5+32)/4'));
	assert.ok('3' === r.calculate('((1/2)+(4/3)-(1/3))*2'));
};
test.line_has_only_start_and_end = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.deepEqual(Object.keys(a),['start','end']);
	assert.deepEqual(a.start,new r.Point(0,0));
	assert.deepEqual(a.end,{x:3,y:4});
	assert.ok(a.start instanceof r.Point);
	assert.ok(a.end instanceof r.Point);
};
test.complex_matches_its_representation_for_negative_real_only_numbers = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(-4,0),-4);	
};
test.readOctal_reads_numbers_as_octal = function (){
	assert.equal(0,r.readOctal(0));
	assert.equal(1,r.readOctal(1));
	assert.equal(8,r.readOctal(10));
	assert.equal(513,r.readOctal(1001));
	assert.equal(299593,r.readOctal(1111111));
};
test.welcome_responds_with_to_be_for_boolean = function (){
	assert.equal('to be or not to be', r.welcome(true));
	assert.equal('to be or not to be', r.welcome(false));
	assert.equal('to be or not to be', r.welcome(5<6));
};
test.decodeList_decodes_the_text_written_in_reverse = function (){
	var x = '.doog si sihT';
	var y = "This is good.";	
	assert.equal(r.decodeList(x),y);	
};
test.create_a_line_at_the_given_position = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	var b = new r.Line({x:1,y:1},{x:4,y:5});
	var c = new r.Line({x:12,y:5},{x:0,y:0});
	assert.equal(5,a.length);
	assert.equal(5,b.length);
	assert.equal(13,c.length);
};
test.welcome_responds_with_hey_dont_count_for_bad_calculation = function (){
	assert.equal('hey dont count',r.welcome(0/'a'));
	assert.equal('hey dont count',r.welcome('a' * 0));
};
test.sort_circles_by_size = function (){
	var a = new r.Circle({x:0,y:0},7);
	var b = new r.Circle({x:2,y:3},4);
	var c = new r.Circle({x:7,y:7},5);
	var d = new r.Circle({x:10,y:10},2);
	var e = new r.Circle({x:9,y:10},1);
	assert.deepEqual([a,b,c,d,e].sort(r.compare.circles),[e,d,b,c,a]);
};
test.reverseWords_reverses_words_in_sentance = function (){
	var x = 'The world is a very wide space. Or is it not?';
	var y = 'ehT dlrow si a yrev ediw .ecaps rO si ti ?ton';
	assert.deepEqual(r.reverseWords(x),y);
};
test.validatePositiveNumber_throws_error_decimal_for_positive_decimal_numbers = function (){
	var tryValidation = function(number,expectedError){
		try{
			r.validatePositiveNumber(number);
			assert.ok(expectedError === undefined);
		}catch(err){
			assert.deepEqual(err.message,expectedError.message);
		}
	};
	
	tryValidation(1.5,new Error('decimal'));
	tryValidation(45.67,new Error('decimal'));
};
test.sort_numbers_in_ascending_order = function (){
	var compare = r.compare;
	var a = [10,2,13,1,0,5,49];
	assert.deepEqual(a.sort(compare.numbers),[0,1,2,5,10,13,49]);
	var b = [1,-2,13,-20,4];
	assert.deepEqual(b.sort(compare.numbers),[-20,-2,1,4,13]);
};
test.range_can_work_on_decimals = function (){	
	assert.deepEqual(r.range(1.2,5),[1.2,2.2,3.2,4.2]);
	assert.deepEqual(r.range(2.1,5.1),[2.1,3.1,4.1]);
	assert.deepEqual(r.range(-5.25,1.3),[-5.25,-4.25,-3.25,-2.25,-1.25,-0.25,0.75]);
};
test.check_if_point_is_in_circle_when_moved = function (){
	var a = new r.Circle({x:0,y:0},7);
	var b = a.moveTo({x:-7,y:-7});
	assert.ok(b instanceof r.Circle);
	assert.ok(a.covers({x:0,y:0}));
	assert.ok(!a.covers({x:7,y:7}));
	assert.ok(!a.covers({x:7,y:0}));
	assert.ok(!a.covers({x:0,y:7}));
	assert.ok(a.covers({x:-1,y:-1}));
	assert.ok(!a.covers({x:8,y:-1}));
	assert.ok(!a.covers({x:3,y:10}));

	assert.ok(b.covers({x:-7,y:-7}));
	assert.ok(!b.covers({x:0,y:0}));
	assert.ok(!b.covers({x:0,y:-7}));
	assert.ok(!b.covers({x:-7,y:0}));
	assert.ok(b.covers({x:-8,y:-8}));
	assert.ok(!b.covers({x:1,y:-8}));
	assert.ok(!b.covers({x:-4,y:3}));
};
test.add_5_increments_allItems_by_5 = function (){
	var x = [9,8,42,31,12];
	var y = [14,13,47,36,17];
	assert.deepEqual(r.add(x,5),y);
};
test.templates_can_be_applied_on_objects = function (){
	var students = [{name:'Ramu',place:'Bangalore'},{name:'Mamu',place:'Andheri'},{name:'Hemu',place:'Aligarh'}];
	var template = new r.Template('Hello name, how is place?');
	var texts = students.map(template.apply);
	assert.deepEqual(texts,['Hello Ramu, how is Bangalore?','Hello Mamu, how is Andheri?','Hello Hemu, how is Aligarh?']);
};
test.union_of_sets_is_commutative = function (){
	var a = new r.Set(1,2,3);
	var b = new r.Set(4,5,6);
	assert.ok(a.union(b).isEqualTo(b.union(a)));
};
test.set_has_no_fields = function (){
	assert.equal(0,Object.keys(new r.Set()));
};
test.what_are_these_gives_the_representation_of_items = function (){
	var a = new r.Point(1,2), b = new r.Point(3,4), c = new r.Circle(a,7);
	var d = new r.Line(a,b);	
	var text = '[Point @x:1,y:2] | [Point @x:3,y:4] | [Circle @1,2 radius:7] | [Line from 1,2 to 3,4]';
	assert.equal(r.what_are_these(a,b,c,d),text);
	assert.equal(r.what_are_these(d,c),'[Line from 1,2 to 3,4] | [Circle @1,2 radius:7]');
	assert.equal(r.what_are_these(1,'hello',2.5),'1 | hello | 2.5');
};
test.readBinary_reads_numbers_as_binary = function (){
	assert.equal(0,r.readBinary(0));
	assert.equal(1,r.readBinary(1));
	assert.equal(2,r.readBinary(10));
	assert.equal(9,r.readBinary(1001));
	assert.equal(255,r.readBinary(11111111));
};
test.create_a_point_at_the_given_position = function (){
	var a = new r.Point(3,4);	
	assert.equal(3,a.x);
	assert.equal(4,a.y);	
};
test.welcome_responds_with_hey_decimal_for_decimal_numbers = function (){
	assert.equal('hey decimal', r.welcome(2.1));
	assert.equal('hey decimal', r.welcome(420.45));
	assert.equal('hey decimal', r.welcome(0.1));
	assert.equal('hey decimal', r.welcome(-25.01));
};
test.intersection_of_sets_is_associative = function (){
	var a = new r.Set(1,2,3);
	var b = new r.Set(4,5,6);
	var c = new r.Set('a');
	assert.ok(a.intersection(b).intersection(c).isEqualTo(a.intersection(b.intersection(c))));
};
test.cannot_edit_a_rectangle = function (){
	var a = r.createRectangle([0,0],[5,10]);
	a.length = 7;
	a.width = 11;
	a.area = 51;
	a.perimeter = 31;	
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
};
test.quickfibonacci_finds_large_fibonacci_numbers_quickly = function (){
	var fibonacci = r.quickFibonacci;
	assert.equal(7778742049,fibonacci(50));	
	assert.equal(956722026041,fibonacci(60));	
};
test.the_points_are_on_line = function (){
	var point_is_on = r.is.the_point_on;
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	var _0_0 = new r.Point(0,0);
	var _3_4 = new r.Point(3,4);
	var _3_5 = new r.Point(3,5);
	assert.ok([_0_0,_3_4].every(point_is_on(a)));
	assert.ok([_0_0,_3_4].some(point_is_on(a)));

	assert.ok(false === [_3_5,_3_4].every(point_is_on(a)));
	assert.ok([_3_5,_3_4].some(point_is_on(a)));	
};
test.point_is_on_circle = function (){
	var point = function(x,y){return new r.Point(x,y);};
	var c = new r.Circle({x:0,y:0},5);
	assert.ok(point(5,0).isOn(c));
	assert.ok(point(0,5).isOn(c));
	assert.ok(point(-5,0).isOn(c));
	assert.ok(point(0,-5).isOn(c));
	assert.ok(point(3,4).isOn(c));
	assert.ok(point(4,3).isOn(c));
	assert.ok(point(-3,4).isOn(c));
	assert.ok(point(-3,-4).isOn(c));
	assert.ok(!point(2,3).isOn(c));
	assert.ok(!point(4,4).isOn(c));
	assert.ok(!point(0,0).isOn(c));
	assert.ok(!point(-4.9,0).isOn(c));	
};
test.sort_numbers_in_descending_order = function (){
	var compare = r.compare;
	var a = [10,2,13,1,0,5,49];
	assert.deepEqual(a.sort(compare.numbers_descending),[49,13,10,5,2,1,0]);
	var b = [1,-2,13,-20,4];
	assert.deepEqual(b.sort(compare.numbers_descending),[13,4,1,-2,-20]);
};
test.until_performs_action_as_long_as_condition_has_not_happened = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIs10 = function(){return count==10;}
	var until_count_is_10 = r.until(countIs10);
	var incrementCount = function(){count++;}
	until_count_is_10.do(incrementCount);
	assert.equal(10,count);
};
test.complex_numbers_are_immutable = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	a.x = 5;
	a.y = 6;
	delete a.x;
	delete a.y;
	assert.equal(a.x,1);
	assert.equal(a.y,2);
};
test.resizeArray_does_nothing_when_array_is_not_supplied = function (){
	var a = {'0':25,'1':26};
	r.resizeArray(a,3);
	assert.deepEqual(Object.keys(a),[0,1]);
	assert.equal(a[0],25);
	assert.equal(a[1],26);

	r.resizeArray(a,1);
	assert.deepEqual(Object.keys(a),[0,1]);
	assert.equal(a[0],25);
	assert.equal(a[1],26);
};
test.complex_matches_its_representation_for_negative_imaginary_only_numbers = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(0,-2),'-2i');	
};
test.detect_circles_overlap = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.ok(a.overlaps(a));
	var b = new r.Circle({x:0,y:0},5);
	assert.ok(a.overlaps(b));
	assert.ok(b.overlaps(a));

	var z = new r.Circle({x:10,y:10},3);
	assert.ok(!z.overlaps(a));
	assert.ok(!a.overlaps(z));

	assert.ok(!z.overlaps(b));
	assert.ok(!b.overlaps(z));

	var c = new r.Circle({x:2,y:2},5);
	var d = new r.Circle({x:4,y:4},5);
	assert.ok(c.overlaps(d));
	assert.ok(d.overlaps(c));
};
test.hasPoint_tells_if_a_given_point_is_in_the_rectangle = function (){
	var a = r.createRectangle([0,0],[5,10]);
	assert.ok(a.hasPoint([1,1]));
	assert.ok(a.hasPoint([3,3]));
	assert.ok(!a.hasPoint([5,11]));
	assert.ok(!a.hasPoint([-1,0]));
};
test.welcome_responds_with_call_that_for_functions = function (){
	var x = function(){console.log('hmm');};
	var y = function(z){return function(){z();}};
	assert.equal('call that', r.welcome(function(){}));
	assert.equal('call that', r.welcome(x));
	assert.equal('call that', r.welcome(Math.max));
	assert.equal('call that', r.welcome(y));
};
test.welcome_responds_with_oh_no_for_null = function (){
	assert.equal('oh no',r.welcome(null));
};
test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array_and_makes_copy_of_references_too = function (){
	var c = {a:1};
	var parent = {cycle:1,child:c};
	var a = [];
	r.resizeArray(a,1,parent);
	assert.equal(a.length,1);
	assert.deepEqual(a[0],parent);//values are same	
	assert.notEqual(a[0],parent);//not same object
	assert.notEqual(a[0].child,c);//child is also not same object	
};
test.findBestVowelWord_finds_the_word_with_highest_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky','and','orange','sun'];
	var y = 'orange';
	assert.equal(r.findBestVowelWord(x),y);
};
test.create_an_empty_set = function (){
	var x = new r.Set();
	var phi = r.Sets.phi;
	assert.ok(phi instanceof r.Set);
	assert.ok(phi.isEqualTo(x));
	assert.ok(x.isEqualTo(phi));
};
test.sort_strings_by_length = function (){
	var a =['hello','how','are','you'];
	assert.deepEqual(a.sort(r.compare.strings_by_length),["how","are","you","hello"]);
	var b = ['good','mornings','are','good','or','not'];
	assert.deepEqual(b.sort(r.compare.strings_by_length),["or","are","not","good","good","mornings"]);	
};
test.finder_helps_find_biggest_number = function (){
	var find = new r.finder(r.compare.numbers);
	[23,45,171,2.25,1.07,777,12,42].forEach(find);
	assert.equal(find(-1),777);	
};
test.sort_points_by_distance_from_a_given_point = function (){
	var x = new r.Point(4,4);
	var a = new r.Point(7,7);
	var b = new r.Point(2,5);
	var c = new r.Point(0,7);
	var d = new r.Point(3,4);
	assert.deepEqual([a,b,c,d].sort(x.compareDistance),[d,b,a,c]);
};
test.if_evaluates_when_evaluators_are_available = function (){
	var good = function(){return 'good';};
	var bad = function(){return 'bad';};	
	assert.equal('good',r.if(true).then(good).else('bad'));
	assert.equal('bad',r.if(false).then(good).else('bad'));
	assert.equal('bad',r.if(false).then(good).else(bad));
};
test.union_of_two_sets_merges_elements = function (){
	var Set = r.Set;
	var a = new Set(1,2);
	var b = new Set(1,2,3);
	var d = a.union(b);
	assert.ok(d instanceof Set);
	assert.ok(d.isEqualTo(b));
};
test.string_is_not_polluted = function (){
	assert.deepEqual(Object.keys(String.prototype),[]);
};
test.complex_numbers_can_be_subtracted = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2), b = new Complex(2,3), c = new Complex(-1,-1);
	var d = a['-'](b);
	assert.ok(d instanceof Complex);
	assert.ok(c.isEqualTo(d));
};
test.fractions_can_be_multiplied = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(3,4), c = new Fraction(3,8);
	var d = a.multiply(b);
	assert.ok(d instanceof Fraction);
	assert.ok(d.isEqualTo(c));
	assert.ok(d.isEqualTo(b.multiply(a)));
};
test.sets_are_represented_by_their_elements = function (){
	var a = r.Sets.phi;
	var b = new r.Set('a');
	var c = new r.Set(1,2,3);
	assert.equal('Set{}',a);
	assert.equal('Set{a}',b);
	assert.equal('Set{1; 2; 3}',c);
};
test.do_performs_action_if_condition_is_set = function (){
	var count = 0;
	var good = function(){return true;};
	var bad = function(){return false;};
	var incrementCount = function(){count++;};
	r.do(incrementCount).if(bad);
	assert.equal(count,0);
	r.do(incrementCount).if(good);
	assert.equal(count,1);
};
test.line_is_represented_by_start_and_end = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(a,'[Line from 0,0 to 3,4]');
};
test.do_performs_action_unless_condition_is_set = function (){
	var count = 0;
	var good = function(){return true;};
	var bad = function(){return false;};
	var incrementCount = function(){count++;};
	r.do(incrementCount).unless(good);
	assert.equal(count,0);
	r.do(incrementCount).unless(bad);
	assert.equal(count,1);
};
test.point_is_represented_by_start_and_end = function (){
	var a = new r.Point(3,4);
	assert.equal(a.toString(),'[Point @x:3,y:4]');
};
test.validatePositiveNumber_does_not_throw_error_if_valid = function (){
	var tryValidation = function(number,expectedError){
		try{
			r.validatePositiveNumber(number);
			assert.ok(expectedError === undefined);
		}catch(err){
			assert.deepEqual(err.message,expectedError.message);
		}
	};

	tryValidation(5);	
};
test.intersection_of_two_sets_finds_common_items_two_sets = function (){
	var Set = r.Set;
	var a = new Set(1,2);
	var b = new Set(2,3);
	var c = new Set(2);
	var d = a.intersection(b);
	assert.ok(d instanceof Set);
	assert.ok(d.isEqualTo(c));
};
test.array_is_not_polluted = function (){
	assert.deepEqual(Object.keys(Array.prototype),[]);
};
test.lines_at_same_angle_are_parallel = function (){
	var c = new r.Line({x:0,y:0},{x:4,y:4});
	var d = new r.Line({x:0,y:1},{x:4,y:5});
	assert.ok(true === d.isParallelTo(c));
	assert.ok(true === c.isParallelTo(d));
	c = new r.Line({x:2,y:3},{x:6,y:15});	
	d = new r.Line({x:10,y:1},{x:14,y:13});	
	assert.ok(true === d.isParallelTo(c));
	assert.ok(true === c.isParallelTo(d));	
};
test.number_is_not_polluted = function (){
	assert.deepEqual(Object.keys(Number.prototype),[]);
};
test.while_performs_action_as_long_as_condition_prevails = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIsLessThan10 = function(){return count<10;}
	var while_count_is_less_than_10 = r.while(countIsLessThan10);
	var incrementCount = function(){count++;}
	while_count_is_less_than_10.do(incrementCount);
	assert.equal(10,count);
};
test.reverseText_reverses_different_words_with_spaces = function (){
	var x = "hello. ola";
	var y = "alo .olleh";
	assert.equal(r.reverseText(x),y);
};
test.resizeArray_adds_elements_of_copies_of_given_object_to_existing_array_and_makes_copy_of_references_at_multiple_levels = function (){
	var c = {a:1}, d = {c:c};
	var parent = {cycle:1,child:c,d:d};
	var a = [];
	r.resizeArray(a,1,parent);
	assert.equal(a.length,1);
	assert.deepEqual(a[0],parent);//values are same	
	assert.notEqual(a[0],parent);//not same object
	assert.notEqual(a[0].child,c);//child is also not same object
	assert.notEqual(a[0].d.c,c);
};
test.lines_do_not_have_indexers = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.ok(!a[0]);
	assert.ok(!a[1]);
};
test.check_if_point_is_inside_circle = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.ok(a.covers({x:0,y:0}));
	assert.ok(!a.covers({x:7,y:7}));
	assert.ok(!a.covers({x:7,y:0}));
	assert.ok(!a.covers({x:0,y:7}));
	assert.ok(a.covers({x:-1,y:-1}));
	assert.ok(!a.covers({x:8,y:-1}));
	assert.ok(!a.covers({x:3,y:10}));
};
test.whole_number_matches_its_representation = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,1), b = new Fraction(-2,1);
	assert.equal(a,'1');	
	assert.equal(b,'-2');
};
test.fractions_can_be_subtracted = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(1,4),c = new Fraction(-1,4);
	var d = a.minus(b);
	assert.ok(d instanceof Fraction);
	assert.ok(b.isEqualTo(d));
	assert.ok(c.isEqualTo(b.minus(a)));
};
test.createNewArray_creates_an_array_of_given_size_with_given_value = function (){
	var a = r.createNewArray(2,25);
	assert.deepEqual(a.length,2);
	assert.equal(a[0],25);
	assert.equal(a[1],25);
};
test.quickfibonacci_finds_the_nth_fibonacci_number = function (){
	var fibonacci = r.quickFibonacci;
	assert.equal(0,fibonacci(1));
	assert.equal(1,fibonacci(2));
	assert.equal(1,fibonacci(3));
	assert.equal(3,fibonacci(5));	
};
test.complex_numbers_do_not_have_indexers = function (){
	var a = new r.Complex(1,2);
	assert.ok(!a[0]);
	assert.ok(!a[1]);
};
test.findWorstVowelWord_finds_the_word_with_least_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.global_namespace_is_not_polluted_in_windows_or_mac = function (){
	var global_fields = Object.keys(global).length;
	var isWindows = process.env.OS && process.env.OS.indexOf('Windows')==0;
	var isOpenShift = process.env.HOME.indexOf('/var/lib/openshift')===0;
	assert.equal(global_fields,(isWindows && 26)||(isOpenShift && 23)||20,global_fields);
};
test.resizeArray_adds_elements_to_existing_array = function (){
	var a = [1,2];
	r.resizeArray(a,3);	
	assert.equal(a.length,3)
	assert.equal(a[0],1);
	assert.equal(a[1],2);
	assert.equal(a[2],undefined);
};
test.move_the_circle_to_the_new_place = function (){
	var a = new r.Circle({x:0,y:0},7);
	var b = a.moveTo({x:-5,y:-5});
	assert.ok(b instanceof r.Circle);
	assert.equal(7,a.radius);
	assert.equal(154,a.area);
	assert.equal(44,a.perimeter);
	assert.deepEqual({x:0,y:0},a.centre);
	assert.equal(7,b.radius);
	assert.equal(154,b.area);
	assert.equal(44,b.perimeter);
	assert.deepEqual({x:-5,y:-5},b.centre);
};
test.changeToOctal_converts_numbers_to_octal = function (){
	assert.equal(true,11 === r.changeToOctal(9));
	assert.equal(true, 1111111 === r.changeToOctal(299593));	
};
test.point_is_uneditable = function (){
	var a = new r.Point(3,4);
	a.x = 100;
	a.y = 100;
	assert.equal(3,a.x);
	assert.equal(4,a.y);	
};
test.circle_has_only_centre_and_radius = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.deepEqual(Object.keys(a),['centre','radius']);	
};
test.complex_matches_its_representation_for_negative_x = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(-1,2),'-1+2i');
};
test.empty_set_union_with_empty_set_gives_the_same_set = function (){
	var a = r.Sets.phi;
	assert.ok(a.union(a).isEqualTo(a));
};
test.Complex_number_multiplied_with_its_conjugate_gives_a_real_number = function (){
	var Complex = r.Complex;
	var a = new Complex(35,-12), b = new Complex(33,56);
	var d = a['*'](a.conjugate);
	var e = b['*'](b.conjugate);
	assert.ok(a.conjugate instanceof Complex);
	assert.ok(d instanceof Complex);
	assert.ok(e instanceof Complex);
	assert.equal(d,1369);
	assert.equal(e,4225);
};
test.complex_numbers_have_only_two_fields = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	assert.deepEqual(Object.keys(a),['x','y']);
};
test.intersection_of_empty_sets_is_empty_set = function (){
	var c = r.Sets.phi;
	assert.ok(c.intersection(c).isEqualTo(c));
};
test.fractions_can_be_divided = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(3,4), c = new Fraction(2,3);
	var d = a.divide(b);
	assert.ok(d instanceof Fraction);
	assert.ok(d.isEqualTo(c));
	assert.ok(a.divide(c).isEqualTo(b));
};
test.intersection_with_a_larger_set_result_in_smaller_set = function (){
	var Set = r.Set;
	var a = new Set(1,2);
	var b = new Set(1,2,3);
	assert.ok(a.intersection(b).isEqualTo(a));
};
test.templates_can_be_used_to_prepare_formatted_text = function (){
	var template = new r.Template('hello 0, how are you? My name is 1');
	var bag = ['Peter','Repeater'];
	assert.equal(template.apply(bag),'hello Peter, how are you? My name is Repeater');
	bag = ['Jane','Peter'];
	assert.equal(template.apply(bag),'hello Jane, how are you? My name is Peter');
};
test.changeToBinary_converts_numbers_to_binary = function (){
	assert.equal(true,11 === r.changeToBinary(3));
	assert.equal(true, 11111111 === r.changeToBinary(255));	
};
test.finder_helps_finding_the_shortest_word_seen_till_now = function (){
	var find = new r.finder(r.compare.short_strings);
	assert.equal('good',find('good'));
	assert.equal('bad',find('bad'));
	assert.equal('is',find('is'));
	assert.equal('is',find('ab'));
	assert.equal('c',find('c'));
	assert.equal('c',find('a'));	
};
test.fractions_can_be_added = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(1,4), c = new Fraction(3,4);
	var d = a.plus(b);
	assert.ok(d instanceof Fraction);
	assert.ok(c.isEqualTo(d));
};
test.switch_runs_the_evaluated_task = function (){
	var count = 0;
	var next = function(){return count++;};
	var ans = [];
	var zero = function(){ans.push('zero');}
	var one = function(){ans.push('one');}
	var two = function(){ans.push('two');}
	var three = function(){ans.pop();}
	var tasks = [zero,one,two,three];
	r.switch(next,tasks);
	assert.deepEqual(ans,['zero']);
	r.switch(next,tasks);
	r.switch(next,tasks);	
	assert.deepEqual(ans,['zero','one','two']);
	r.switch(next,tasks);
	assert.deepEqual(ans,['zero','one']);
};
test.resizeArray_does_not_change_elements_of_existing_array = function (){
	var a = [42,42];
	r.resizeArray(a,1,25);
	assert.deepEqual(a.length,1);
	assert.equal(a[0],42);	
};
test.complex_matches_its_representation_for_imaginary_only_numbers = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(0,3),'3i');	
};
test.createNewArray_creates_an_array_of_given_size_with_given_object = function (){
	var a = r.createNewArray(2,{a:1});
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],{a:1});
	assert.deepEqual(a[1],{a:1});
};
test.if_evaluates_respective_values = function (){
	var good = function(){return 'good';};
	var bad = function(){return 'bad';};	
	assert.equal('good',r.if(true).then(good).else(bad));
	assert.equal('bad',r.if(false).then(good).else(bad));	
};
test.the_points_are_on_the_circle = function (){
	var point_is_on = r.is.the_point_on;
	var point = function(x,y){return new r.Point(x,y);};
	var c = new r.Circle({x:0,y:0},5);
	assert.ok([point(5,0),point(0,5),point(-5,0),point(-5,0)].every(point_is_on(c)));
	assert.ok([point(5,0),point(0,5),point(-5,0),point(-5,0)].some(point_is_on(c)));
	assert.ok([point(-4.9,0),point(0,0),point(3,4)].some(point_is_on(c)));
	assert.ok(false === [point(-4.9,0),point(0,0),point(3,4)].every(point_is_on(c)));	
};
test.two_points_can_be_equal_for_3_decimal_precision = function (){
	var a = new r.Point(1.333,4);	
	var b = new r.Point(4/3,4);
	var c = new r.Point(1.33,4);
	assert.ok(a.isEqualTo(b));
	assert.ok(b.isEqualTo(a));
	assert.ok(!b.isEqualTo(c));		
};
test.lines_parallel_to_axis_are_parallel = function (){
	var c = new r.Line({x:0,y:0},{x:4,y:0});
	var d = new r.Line({x:0,y:2},{x:4,y:2});
	assert.ok(true === d.isParallelTo(c));
	assert.ok(true === c.isParallelTo(d));
	
	var e = new r.Line({x:0,y:0},{x:0,y:4});
	var f = new r.Line({x:2,y:0},{x:2,y:4});
	assert.ok(true === e.isParallelTo(f));
};
test.finder_helps_find_words_with_most_vowel = function (){
	var find = new r.finder(r.compare.strings_by_vowel_count);
	['Good','morning','is','one','with','bright','sky','and','orange','sun'].forEach(find);
	assert.equal(find(''),"orange");	
};
test.if_gives_respective_values_based_on_test = function (){
	var isEven = function(x){ 
		return function(){return x%2 == 0;};
	};
	assert.equal(5,r.if(isEven(6)).then(5).else(6));
	assert.equal(6,r.if(isEven(5)).then(5).else(6));

	var good = function(){return true;};
	var bad = function(){return false;};

	assert.equal(5,r.if(good).then(5).else(6));
	assert.equal(6,r.if(bad).then(5).else(6));
};
test.negative_fraction_matches_its_representation = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(-1,2), b = new Fraction(1,-12);
	assert.equal(a,'⁻¹⁄₂');	
	assert.equal(b,'⁻¹⁄₁₂');
};
test.welcome_responds_with_who_is_it_for_undefined = function (){
	var x;
	assert.equal('who is it',r.welcome(x));
};
test.circle_is_represented_by_radius_and_centre = function (){
	var a = new r.Circle({x:0,y:0},7);
	assert.equal(a,'[Circle @0,0 radius:7]');
};
test.line_is_uneditable = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	a.length = 7;
	assert.equal(5,a.length);
	delete a.length;
	assert.equal(5,a.length);
};
test.welcome_responds_with_see_ya_items_for_arrays = function (){
	assert.equal('seeya', r.welcome([]));
	assert.equal('seeya 1_2', r.welcome([1,2]));
	assert.equal('seeya 1_2_3', r.welcome([1,2,3]));
	assert.equal('seeya compute_three_2_0', r.welcome(['compute','three',2,0]));
};
test.circle_has_the_point_on_it = function (){
	var point = function(x,y){return new r.Point(x,y);};
	var c = new r.Circle({x:0,y:0},5);
	assert.ok(c.hasPoint(point(5,0)));
	assert.ok(c.hasPoint(point(0,5)));
	assert.ok(c.hasPoint(point(-5,0)));
	assert.ok(c.hasPoint(point(0,-5)));
	assert.ok(c.hasPoint(point(3,4)));
	assert.ok(c.hasPoint(point(4,3)));
	assert.ok(c.hasPoint(point(-3,4)));
	assert.ok(c.hasPoint(point(-3,-4)));
	assert.ok(false === c.hasPoint(point(2,3)));
	assert.ok(false === c.hasPoint(point(4,4)));
	assert.ok(false === c.hasPoint(point(0,0)));
	assert.ok(false === c.hasPoint(point(-4.9,0)));	
};
test.while_can_be_used_to_populate_an_array = function (){
	var numbers = [];	
	r.while(function(){return numbers.length < 10}).do(function(){numbers.push(numbers.length)});
	assert.deepEqual(numbers,[0,1,2,3,4,5,6,7,8,9]);
};
test.switch_runs_the_named_task = function (){
	var ans = [];
	var tasks = {
		zero:function(){ans.push('zero');},
		one:function(){ans.push('one');},
		two:function(){ans.push('two');},
		three:function(){ans.pop();}
	};	
	r.switch('zero',tasks);
	assert.deepEqual(ans,['zero']);
	r.switch('one',tasks);
	r.switch('two',tasks);	
	assert.deepEqual(ans,['zero','one','two']);
	r.switch('three',tasks);
	assert.deepEqual(ans,['zero','one']);
};
test.until_does_not_perform_action_if_condition_is_set = function (){
	//Dont use any loops to implement this
	var count=10;
	var countIs10 = function(){return count==10;}
	var until_count_is_10 = r.until(countIs10);
	var incrementCount = function(){count++;}
	until_count_is_10.do(incrementCount);
	assert.equal(10,count);
};
test.readBinary_reads_text_as_binary = function (){
	assert.equal(0,r.readBinary('0'));
	assert.equal(1,r.readBinary('1'));
	assert.equal(2,r.readBinary('10'));
	assert.equal(9,r.readBinary('1001'));
	assert.equal(255,r.readBinary('11111111'));
};
test.createNewArray_creates_an_empty_array = function (){
	assert.deepEqual(r.createNewArray(),[]);
};
test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'Good';
	assert.equal(r.findBestVowelWord(x),y);
};
test.find_the_numbers_that_are_in_ascending_order = function (){
	assert.deepEqual([1,2,5,6,7,10].filter(r.is.greater_than_previous_number),[1,2,5,6,7,10]);
	assert.deepEqual([1,-1,5,2,-3,-8].filter(r.is.greater_than_previous_number),[1,5]);	
};
test.detect_circles_overlaping = function (){
	var a = new r.Circle({x:2,y:2},5);
	var b = new r.Circle({x:4,y:4},5);
	assert.ok(a.overlaps(b));
	assert.ok(b.overlaps(a));
};
test.fibonacci_returns_undefined_for_negative_numbers = function (){
	var fibonacci = r.fibonacci;
	assert.equal(undefined,fibonacci(-1));
	assert.equal(undefined,fibonacci(-5));	
};
test.sets_do_not_have_indexers = function (){
	var a = new r.Set(1,2,3);
	assert.ok(!a[0]);
	assert.ok(!a[1]);
	assert.ok(!a[2]);
};
test.fractions_have_no_fields = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2);
	assert.deepEqual(Object.keys(a),[]);
};
test.finder_helps_finding_the_longest_word_seen_till_now = function (){
	var find = new r.finder();
	assert.equal('a',find('a'));
	assert.equal('ab',find('ab'));
	assert.equal('ab',find('c'));
	assert.equal('good',find('good'));
	assert.equal('good',find('bad'));
	assert.equal('good',find('is'));
	assert.equal(45.57,find(45.57));
	assert.equal(123456,find(123456));
	assert.equal(123456,find(12));
	assert.equal('hahahahaha',find('hahahahaha'));
};
test.findWorstVowelWord_finds_the_first_word_with_least_number_of_vowels = function (){
	var x = ['A','good','sky','is','dry','or','wet'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};
test.sort_strings_by_number_of_vowels = function (){
	var x = ['Good','morning','is','one','with','bright','sky','and','orange','sun'];
	assert.deepEqual(x.sort(r.compare.strings_by_vowel_count),["sky","is","with","bright","and","sun","Good","morning","one","orange"]);
	var y = ['A','good','sky','is','dry','or','wet'];
	assert.deepEqual(y.sort(r.compare.strings_by_vowel_count),["sky","dry","A","is","or","wet","good"]);
};
test.validatePositiveNumber_throws_error_not_a_number_for_strings = function (){
	var tryValidation = function(number,expectedError){
		try{
			r.validatePositiveNumber(number);
			assert.ok(expectedError === undefined);
		}catch(err){
			assert.deepEqual(err.message,expectedError.message);
		}
	};	
	tryValidation('a',new Error('not a number'));
	tryValidation('12');
};
test.two_fractions_can_be_equal = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2);
	assert.ok(a.isEqualTo(a));
	var b = new Fraction(1,2);
	assert.ok(a.isEqualTo(b));
	var c = new Fraction(3,4);
	assert.ok(!a.isEqualTo(c));
	assert.ok(!c.isEqualTo(a));
	assert.ok(!b.isEqualTo(c));
	var d = new Fraction(1,3);
	assert.ok(!a.isEqualTo(d));
	var e = new Fraction(2,1);
	assert.ok(!b.isEqualTo(e));	
};
test.find_next_day = function (){
	assert.deepEqual(['2014-01-01','2014-03-01','2014-05-01','2014-09-02'].map(r.to.nextDay),["2014-01-02","2014-03-02","2014-05-02","2014-09-03"]);
	assert.deepEqual(['2012-01-31','2013-02-28','2009-05-01','2018-09-02'].map(r.to.nextDay),["2012-02-01","2013-03-01","2009-05-02","2018-09-03"]);
};
test.union_of_two_sets_joins_two_sets = function (){
	var Set = r.Set;
	var a = new Set(1);
	var b = new Set(2);
	var c = new Set(1,2);
	var d = a.union(b);
	assert.ok(d instanceof Set);
	assert.ok(d.isEqualTo(c));
};
test.union_of_sets_is_associative = function (){
	var a = new r.Set(1,2,3);
	var b = new r.Set(4,5,6);
	var c = new r.Set('a');
	assert.ok(a.union(b).union(c).isEqualTo(a.union(b.union(c))));
};
test.impose_adds_items_of_second_array_if_available = function (){
	var x = [1,2,3];
	var y = [4,5];
	var z = [5,7,3];
	assert.deepEqual(r.impose(x,y),z);
};
test.negative_fractions_can_be_added = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(-1,2), b = new Fraction(1,4), c = new Fraction(-1,4);
	var d = a.plus(b);
	assert.ok(d instanceof Fraction);
	assert.ok(c.isEqualTo(d));
	assert.ok(c.isEqualTo(b.plus(a)));
};
test.moveTo_moves_the_Rectangle_to_the_new_place = function (){
	var a = r.createRectangle([0,0],[5,10]);
	var b = a.moveTo([-5,-5]);
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
	assert.equal(5,b.length);
	assert.equal(10,b.width);
	assert.equal(50,b.area);
	assert.equal(30,b.perimeter);
};
test.impose_adds_only_item_of_two_equal_sized_arrays = function (){
	var x = [3];
	var y = [6];
	var z = [9];
	assert.deepEqual(r.impose(x,y),z);
};
test.find_days = function (){
	assert.deepEqual(['2014-01-01','2014-03-01','2014-05-01','2014-09-02'].map(r.to.day),["Wednesday","Saturday","Thursday","Tuesday"]);
	assert.deepEqual(['2012-01-31','2013-02-28','2009-05-01','2018-09-02'].map(r.to.day),["Tuesday","Thursday","Friday","Sunday"]);
};
test.accumulator_starts_with_0 = function (){
	var accumulator = new r.accumulator;
	var getValue = function(){return this.value;};
	assert.deepEqual(0,r.operate(accumulator,getValue));
};
test.negative_fractions_can_be_subtracted = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(-1,2), b = new Fraction(1,4), c = new Fraction(3,-4),e = new Fraction(3,4);
	var d = a.minus(b);
	assert.ok(d instanceof Fraction);
	assert.ok(c.isEqualTo(d));
	assert.ok(e.isEqualTo(b.minus(a)));
};
test.getVowelCount_gives_the_count_of_vowels = function (){
	assert.equal(r.getVowelCount('morning'),2);
	assert.equal(r.getVowelCount('cooling'),3);
	assert.equal(r.getVowelCount('i am'),2);
};
test.round_off_amount_to_25_paise = function (){
	assert.deepEqual([12.36,423.56,12.99,92.23,100.02,11.12,9.7234].map(r.to.round_25_paise),[12.25,423.50,13,92.25,100,11,9.75]);
};
test.add_lot_of_data_to_accumulator = function (){
	var a = new r.accumulator;
	r.operate(a,a.add,5,6,7,8);	
	var getValue = function(){return this.value;}
	assert.deepEqual(26,r.operate(a,getValue));
};
test.resizeArray_does_nothing_when_new_size_is_not_given = function (){
	var a = [1,2];
	r.resizeArray(a);
	assert.equal(a.length,2);
	assert.equal(a[0],1);
	assert.equal(a[1],2);
};
test.complex_numbers_have_real_and_imaginary_parts = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	assert.equal(a.x,1);
	assert.equal(a.y,2);
};
test.calculate_factorial_for_positive_numbers = function (){
	assert.equal(1,r.factorial(1));
	assert.equal(120,r.factorial(5));
};
test.lines_at_different_angles_are_not_parallel = function (){
	var c = new r.Line({x:0,y:0},{x:4,y:4});
	var d = new r.Line({x:100,y:1},{x:-40,y:-50});
	assert.ok(false === d.isParallelTo(c));
	assert.ok(false === c.isParallelTo(d));	
};
test.object_is_not_polluted = function (){
	assert.deepEqual(Object.keys(Object.prototype),[]);
};
test.mixed_fraction_matches_its_representation = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(3,2), b = new Fraction(-8,3);
	assert.equal(a,'1 ¹⁄₂');	
	assert.equal(b,'-2 ²⁄₃');
};
test.accumulator_starts_with_a_number = function (){
	var accumulator = new r.accumulator(10);
	var getValue = function(){return this.value;};
	assert.deepEqual(10,r.operate(accumulator,getValue));
};
test.findX_gives_y_coordinate_of_a_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(1.5,a.findX(2).toFixed(4));
	assert.equal(2.25,a.findX(3).toFixed(4));
	assert.equal(0.75,a.findX(1).toFixed(4));
	assert.equal(1.125,a.findX(1.5).toFixed(4));
};
test.the_numbers_are_in_ascending_order = function (){
	assert.ok([1,2,5,6,7,10].every(r.is.greater_than_previous_number));
	assert.ok([1,-1,5,2,-3,-8].some(r.is.greater_than_previous_number));
	assert.ok(false === [1,-1,5,2,-3,-8].every(r.is.greater_than_previous_number));
};
test.remove_lot_of_data_from_accumulator = function (){
	var a = new r.accumulator(27);
	r.operate(a,a.remove,5,6,7,-8);	
	var getValue = function(){return this.value;}
	assert.deepEqual(17,r.operate(a,getValue));
};
test.if_gives_respective_values = function (){
	assert.equal(5,r.if(true).then(5).else(6));
	assert.equal(6,r.if(false).then(5).else(6));
	assert.equal('hello',r.if(true).then('hello').else('who'));
	assert.equal('who',r.if(false).then('hello').else('who'));
};
test.complex_matches_its_representation_for_real_only_numbers = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(1,0),1);	
};
test.findY_gives_y_coordinate_of_a_line_only_inside = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	assert.equal(1.3333,a.findY(1).toFixed(4));
	assert.equal(2,a.findY(1.5).toFixed(4));
	assert.equal(null,a.findY(4));
	assert.equal(null,a.findY(-1));
};
test.fractions_can_be_created_with_whole_number = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1), b = new Fraction(-2);
	assert.equal(a,'1');	
	assert.equal(b,'-2');
};
test.validatePositiveNumber_throws_error_negative_for_negative_numbers = function (){
	var tryValidation = function(number,expectedError){
		try{
			r.validatePositiveNumber(number);
			assert.ok(expectedError === undefined);
		}catch(err){
			assert.deepEqual(err.message,expectedError.message);
		}
	};
	
	tryValidation(-1,new Error('negative'));
	tryValidation(-1.5,new Error('negative'));	
};
test.createNewArray_creates_an_array_of_given_size = function (){
	var a = r.createNewArray(5);
	assert.deepEqual(a.length,5);
	assert.equal(a[4],undefined);
};
test.do_performs_action_until_condition_happens = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIsGreaterThan9 = function(){return count>9;}
	var incrementCount = function(){count++;}
	r.do(incrementCount).until(countIsGreaterThan9);
	assert.equal(10,count);
};
test.createRectangle_creates_a_Rectangle_of_a_given_dimension_at_given_place = function (){
	var a = r.createRectangle([0,0],[5,10]);
	assert.equal(5,a.length);
	assert.equal(10,a.width);
	assert.equal(50,a.area);
	assert.equal(30,a.perimeter);
};
test.two_points_can_be_equal = function (){
	var a = new r.Point(3,4);	
	var b = new r.Point(3,4);
	var c = new r.Point(3.01,4);
	assert.ok(a.isEqualTo(b));
	assert.ok(b.isEqualTo(a));
	assert.ok(!b.isEqualTo(c));	
};
test.welcome_responds_with_hi_fields_for_objects = function (){
	assert.equal('hi', r.welcome({}));
	assert.equal('hi one,two', r.welcome({one:1,two:2}));
	assert.equal('hi compute,three', r.welcome({compute:function(){return 5},three:3}));
};
test.until_can_be_used_to_populate_an_array = function (){
	var numbers = [];	
	r.until(function(){return numbers.length == 10}).do(function(){numbers.push(numbers.length)});
	assert.deepEqual(numbers,[0,1,2,3,4,5,6,7,8,9]);
};
test.lines_can_be_equal = function (){
	var a = new r.Line({x:0,y:0},{x:1.5,y:2});
	var b = new r.Line({x:0,y:0},{x:1.5,y:2});
	var c = new r.Line({x:1.5,y:2},{x:3,y:4});
	assert.ok(a.isEqualTo(b));
	assert.ok(b.isEqualTo(a));
	assert.ok(!a.isEqualTo(c));
	assert.ok(!c.isEqualTo(b));
};
test.create_a_set_of_few_numbers = function (){
	var phi = r.Sets.phi;
	var x = new r.Set(1,2);
	var y = new r.Set(2,1);
	assert.equal(2,x.cardinality);
	assert.equal(2,y.cardinality);
	assert.ok(x.isEqualTo(y));
	assert.ok(y.isEqualTo(x));
	assert.deepEqual(false,phi.isEqualTo(x));
	assert.deepEqual(false,phi.isEqualTo(y));
};
test.complex_matches_its_representation_for_negative_x_y = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(-1,-2),'-1-2i');
};
test.checks_if_point_is_on_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	var _0_0 = new r.Point(0,0);
	var _3_4 = new r.Point(3,4);
	var _3_5 = new r.Point(3,5);
	
	assert.ok(_0_0.isOn(a));
	assert.ok(_3_4.isOn(a));
	assert.ok(!_3_5.isOn(a));

	var p1 = new r.Point(-1,0);
	var p2 = new r.Point(2.8,3.6);
	var p3 = new r.Point(0.1,0.5);

	assert.ok(!p1.isOn(a));
	assert.ok(!p2.isOn(a));
	assert.ok(!p3.isOn(a));	
};
test.intersection_of_sets_is_commutative = function (){
	var a = new r.Set(1,2,3);
	var b = new r.Set(4,5,6);
	assert.ok(a.intersection(b).isEqualTo(b.intersection(a)));
};
test.do_performs_action_once_if_condition_is_set = function (){
	//Dont use any loops to implement this
	var count=10;
	var countIsGreaterThan9 = function(){return count>9;}
	var incrementCount = function(){count++;}
	r.do(incrementCount).until(countIsGreaterThan9);
	assert.equal(11,count);
};
test.switch_runs_the_evaluated_named_task = function (){
	var ans = [];
	var tasks = {
		zero:function(){ans.push('zero');},
		one:function(){ans.push('one');},
		two:function(){ans.push('two');},
		three:function(){ans.pop();}
	};
	var order = ['zero','one','two','three'];
	var next = function(){return order.shift();};
	r.switch(next,tasks);
	assert.deepEqual(ans,['zero']);
	r.switch(next,tasks);
	r.switch(next,tasks);	
	assert.deepEqual(ans,['zero','one','two']);
	r.switch(next,tasks);
	assert.deepEqual(ans,['zero','one']);
};
test.if_evaluates_respective_value_when_failure_case_is_missing = function (){
	var good = function(){return 'good';};	
	assert.equal('good',r.if(true).only_then(good));
	assert.equal(false,r.if(false).only_then(good));	
};
test.fractions_divided_by_another_fraction_division_acts_like_multiplication = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(3,4), c = new Fraction(2,3);
	assert.ok(a.divide(b.divide(c)).isEqualTo(a.multiply(c).divide(b)));
	assert.ok(a.divide(b).divide(c).isEqualTo(a.divide(b.multiply(c))));	
};
test.find_a_point_at_a_distance_from_the_end_of_line = function (){
	var a = new r.Line({x:0,y:0},{x:3,y:4});
	var b = a.findPointFromEnd(2.5);
	var c = a.findPointFromEnd(0);
	assert.ok(b instanceof r.Point);
	assert.ok(c instanceof r.Point);
	assert.deepEqual(b,{x:1.5,y:2});
	assert.deepEqual(c,{x:3,y:4});
};
test.fraction_matches_its_representation = function (){
	var Fraction = r.Fraction;
	var a = new Fraction(1,2), b = new Fraction(1,12);
	assert.equal(a,'¹⁄₂');	
	assert.equal(b,'¹⁄₁₂');
};
test.while_does_not_perform_action_if_condition_is_not_set = function (){
	//Dont use any loops to implement this
	var count=10;
	var countIsLessThan10 = function(){return count<10;}
	var incrementCount = function(){count++;}
	r.while(countIsLessThan10).do(incrementCount);
	assert.equal(10,count);
};
test.range_can_move_at_given_frequency = function (){	
	assert.deepEqual(r.range(1,3.1,0.5),[1,1.5,2,2.5,3]);
	assert.deepEqual(r.range(2.1,3.1,0.25),[2.1,2.35,2.6,2.85]);
};
test.the_circle_is_not_editable = function (){
	var a = new r.Circle({x:0,y:0},7);
	a.radius = 9;
	a.area = 8;
	a.perimeter = 1;
	a.centre = {x:1,y:1};
	assert.equal(7,a.radius);
	assert.equal(154,a.area);
	assert.equal(44,a.perimeter);
	assert.deepEqual({x:0,y:0},a.centre);
	delete a.radius;
	delete a.perimeter;
	delete a.centre;
	delete a.area;
};
test.templates_can_be_used_to_prepare_formatted_text_named_place_holder = function (){
	var template = new r.Template('hello second_person, how are you? My name is first_person');
	var bag = {first_person:'Repeater',second_person:'Peter'};
	assert.equal(template.apply(bag),'hello Peter, how are you? My name is Repeater');
	var bag = {first_person:'Peter',second_person:'Jane'};
	assert.equal(template.apply(bag),'hello Jane, how are you? My name is Peter');
};
test.switch_runs_the_mentioned_task = function (){
	var ans = [];
	var zero = function(){ans.push('zero');}
	var one = function(){ans.push('one');}
	var two = function(){ans.push('two');}
	var three = function(){ans.pop();}
	var tasks = [zero,one,two,three];
	r.switch(0,tasks);
	assert.deepEqual(ans,['zero']);
	r.switch(1,tasks);
	r.switch(2,tasks);	
	assert.deepEqual(ans,['zero','one','two']);
	r.switch(3,tasks);
	assert.deepEqual(ans,['zero','one']);
};
test.there_are_no_special_fields_on_object = function (){
	var o={};
	assert.equal(Object.keys(o.__proto__),0);	
};
test.sort_points_by_distance_from_origin = function (){
	var a = new r.Point(10,10);
	var b = new r.Point(2,5);
	var c = new r.Point(0,7);
	var d = new r.Point(3,4);
	assert.deepEqual([a,b,c,d].sort(r.compare.points),[d,b,c,a]);
};
test.operate_can_work_on_arrays = function (){
	var a = new r.accumulator(10);
	var x = [a.getValue.bind(a),a.add.bind(a),a.remove.bind(a)];	
	assert.deepEqual(10,r.operate(x,0));
	r.operate(x,1,5,6,7,8);
	assert.deepEqual(36,r.operate(x,0));
	r.operate(x,2,5,6,7,-8);
	assert.deepEqual(26,r.operate(x,0));
};
test.do_performs_action_as_long_as_condition_prevails = function (){
	//Dont use any loops to implement this
	var count=0;
	var countIsLessThan10 = function(){return count<10;}
	var incrementCount = function(){count++;}
	r.do(incrementCount).while(countIsLessThan10);
	assert.equal(10,count);
};
test.createNewArray_creates_an_array_of_given_size_with_copies_of_object = function (){
	var o = {a:1};
	var a = r.createNewArray(2,o);
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],o);//values are same
	assert.deepEqual(a[1],o);
	assert.notEqual(a[0],o);//not same object
	assert.notEqual(a[1],o);
};
test.changeToHex_converts_numbers_to_hexadecimal = function (){
	assert.equal('7b', r.changeToHex(123));
	assert.equal('ff', r.changeToHex(255));	
	assert.equal('3ff', r.changeToHex(1023));	
};
test.empty_sets_have_cardinality_of_0 = function (){
	assert.deepEqual(r.Sets.phi.cardinality,0);
};
test.complex_numbers_can_be_added = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2), b = new Complex(2,3), c = new Complex(3,5);
	var d = a['+'](b);
	assert.ok(d instanceof Complex);
	assert.ok(c.isEqualTo(d));
};
test.intersection_with_empty_set_is_itself = function (){
	var Set = r.Set;
	var a = r.Sets.phi;
	var b = new Set(2,3,4,5);
	assert.ok(b.intersection(a).isEqualTo(a));
};
test.templates_dont_have_any_fields = function (){
	var template = new r.Template('Hello name, how is place?');
	assert.equal(0,Object.keys(template).length);
};
test.reverseText_reverses_given_text = function (){
	var x = "hello.";
	var y = ".olleh";
	assert.equal(r.reverseText(x),y);
};
test.complex_matches_its_representation_for_negative_y = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(1,-2),'1-2i');
};
test.find_factors_of_a_number = function (){
	assert.deepEqual(r.factors(1),[1]);
	assert.deepEqual(r.factors(2),[1,2]);
	assert.deepEqual(r.factors(25),[1,5,25]);
	assert.deepEqual(r.factors(99),[1,3,9,11,33,99]);
};
test.lines_crossing_axes_are_not_parallel = function (){
	var a = new r.Line({x:-5,y:0},{x:5,y:0});
	var b = new r.Line({x:0,y:-5},{x:0,y:5});
	assert.ok(false===a.isParallelTo(b));
	assert.ok(false===b.isParallelTo(a));	
};
test.templates_can_apply_formatted_text_with_repeated_place_holders = function (){
	var template = new r.Template('0, 0, 0, Where are you?');
	var bag = ['Jimmy'];
	assert.equal(template.apply(bag),'Jimmy, Jimmy, Jimmy, Where are you?');
	bag = ['jam','bread','sweet'];
	template = new r.Template('1 is good to eat with 0. But, I would rather prefer 1 without 0 on it. 0 is too 2!');
	assert.equal(template.apply(bag),'bread is good to eat with jam. But, I would rather prefer bread without jam on it. jam is too sweet!');
};
test.complex_matches_its_representation = function (){
	var Complex = r.Complex;
	assert.equal(new Complex(1,2),'1+2i');	
};
test.isPrime_can_reject_big_compositeNumbers = function (){
	var isPrime = r.isPrime;
	assert.ok(!isPrime(270));
	assert.ok(!isPrime(987));
	assert.ok(!isPrime(163843));	
	assert.ok(!isPrime(15485861));	
};
test.set_of_arrays_is_represented_by_its_elements = function (){
	var a = new r.Set([1],[2,3]);
	assert.equal('Set{1; 2,3}',a);
	var b = new r.Set([2,3],[2,3],[1,2]);
	assert.equal('Set{1,2; 2,3}',b);
};
test.line_is_not_same_as_its_string_representation = function (){
	var a = new r.Line({x:0,y:0},{x:1,y:1});
	assert.ok(!a.isEqualTo(a.toString()));
};
test.isPrime_can_identify_small_primeNumbers = function (){
	var isPrime = r.isPrime;
	assert.ok(isPrime(2));
	assert.ok(isPrime(11));
	assert.ok(isPrime(3));
	assert.ok(isPrime(5));	
	assert.ok(isPrime(7));	
};
test.isPrime_can_identify_big_primeNumbers = function (){
	var isPrime = r.isPrime;
	assert.ok(isPrime(271));
	assert.ok(isPrime(991));
	assert.ok(isPrime(163841));
	assert.ok(isPrime(15485863));
};
test.isPrime_can_reject_small_compositeNumbers = function (){
	var isPrime = r.isPrime;
	assert.ok(!isPrime(4));
	assert.ok(!isPrime(6));
	assert.ok(!isPrime(9));	
	assert.ok(!isPrime(15));	
};
test.empty_set_is_not_same_as_its_string_representation = function (){
	assert.ok(!r.Sets.phi.isEqualTo('Set{}'));
};
test.line_is_not_same_as_any_object = function (){
	var a = new r.Line({x:0,y:0},{x:1,y:1});
	assert.ok(!a.isEqualTo({start:{x:0,y:0},end:{x:1,y:1}}));
};
test.complex_numbers_are_not_same_as_any_object = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	assert.ok(!a.isEqualTo({x:1,y:2}));
};
test.complement_inverts_isEven = function () {
	var complement=r.complement;
	var isOdd=complement(r.isEven);
	assert.equal(true,isOdd(3));
	assert.equal(false,isOdd(2));
	assert.equal(false,isOdd(100));
};
test.point_is_not_same_as_its_representation = function (){
	var a = new r.Point(3,4);	
	assert.ok(!a.isEqualTo(a.toString()));
};
test.complex_numbers_are_not_same_as_their_string_representations = function (){
	var Complex = r.Complex;
	var a = new Complex(1,2);
	assert.ok(!a.isEqualTo(a.toString()));
};
test.point_is_not_same_as_any_object = function (){
	var a = new r.Point(3,4);	
	assert.ok(!a.isEqualTo({x:3,y:4}));
};
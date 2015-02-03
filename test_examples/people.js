assert = require("assert");
var test = {};
exports.test = test;			

var People = [
{
	name:"Krishna",
	gender:"Male",
	state:{name:"Gujrat",capital:"Gandhinagar",population:40000000},
	living_city:{name:"Dwaraka",population:1000000},
	likes:["milk"],
	loves:["sweets"],
	hates:["idiots"],
	doesnt_like:"bad uncles",
	brother: 105,
	sister:"Durga",
	profession:"charioteer"
},
{
	name:"Karan",
	state:{name:"West Bengal",capital:"Kolkata",population:70000000},
	living_city:{name:"Kolkata",population:15000000},
	likes:["Charity"],
	gender:"Male",
	loves:["sweets"],
	hates:["dishonesty"],
	brother: 5,
	profession:"worrior",
	ability:"fly planes"
},
{
	name:"Durga",
	state:{name:"Odisha",capital:"Bhubneshwar",population:50000000},
	living_city:{name:"Cuttak",population:1000000},
	likes:["long walks"],
	gender:"Female",
	brother:"Krishna",
	loves:["flowers"],
	hates:["dishonesty","bad uncles","idiots"],
	relation_with_krishna:"sister",
	ability:"perform magics"
},
{
	name:"Arjun",
	state:{name:"Gujrat",capital:"Gandhinagar",population:40000000},
	living_city:{name:"Dwaraka",population:1000000},
	likes:["milk"],
	gender:"Male",
	loves:["archery"],
	hates:["shah rukh khan movies"],
	childrens:2,
	profession:"worrior",
	relation_with_krishna:"cousine"
},
{
	name:"Sudama",
	state:{name:"Karnataka",capital:"Bangalore",population:100000000},
	living_city:{name:"Bangalore",population:10000000},
	likes:["rice","rain"],
	gender:"Male",
	loves:["sweets"],
	hates:["Charity"],
	sister:1,
	ability:"cook"
},
{
	name:"Ali",
	state:{name:"West Bengal",capital:"Kolkata",population:70000000},
	living_city:{name:"Kolkata",population:15000000},
	likes:["sweets","chaat"],
	gender:"Male",
	loves:["wrestlings"],
	hates:["milk"],
	profession:"scientist",
	ability:"fly planes"
}
];

function people_from(city){
	var citizens = People.filter(function(people){
		return people.living_city.name == city;
	});
	return citizens.map(function(s){return s.name});
};

function how_many_people_likes(dish){
	var gluttons = People.filter(function(people_element){
		return people_element.likes == "milk";
	});
	return gluttons.length;
};

function people_are_from(people_array){
	var list_of_states = people_array.reduce(function(x,y){
		if(x.indexOf(y.state.name) < 0){
			x.push(y.state.name);
		}
		return x;
	},[]);
	return list_of_states;
};

function loves_and_likes_dishes(love,like){
	var result =  People.filter(function(element){
		if(element.loves == love&&element.likes == like)
			return true;
		});
	return result.map(function(x){return x.name;})

};
function people_who_hates(hate_thing){
	var hate_people_array = [];
	People.forEach(function(each_person){
		if(each_person.hates.filter(function(h){
			return (h == hate_thing)}) == hate_thing)
		 	hate_people_array.push(each_person);
		});
	return hate_people_array.map(function(x){ return x.state.population;});
};
function check_brother_for(person_name){
	var hasbrother = false;
	People.forEach(function(each_person){
		if((each_person.name == person_name) && (each_person.brother != undefined))
			hasbrother = true;
	});
	return hasbrother;
};
function check_for_ability(person_name,his_ability){
	var isable = 'No';
	People.forEach(function(pname){
		if(pname.name == person_name && pname.ability == his_ability)
			isable = 'Yes';
	});
	return isable;
};

function check_for_capital(people_array){
	return people_array.filter(function(each_element){
		if(each_element.living_city.name == each_element.state.capital)
			return true;
		}).length;
};

function how_many_something_what(gen,like_and_love,thing){
	return People.filter(function(element){
		if(element.gender == gen && element[like_and_love] == thing)
			return true;
	}).length;
};
function who_is_brother_or_sister_of(name,relation){
	var Relation = People.filter(function(each_person){
		if(each_person.name == name)
			return true;

	});
	return Relation.map(function(p){return p[relation];});
};
test.gives_people_names_from_given_city =  function(){
	var city = "Kolkata";
	assert.deepEqual(people_from(city),["Karan","Ali"]);
};
test.returns_number_people_who_likes_given_dish = function(){
	assert.equal(how_many_people_likes("milk"),2);
};
test.returns_state_of_people = function(){
	assert.deepEqual(people_are_from(People),["Gujrat","West Bengal","Odisha","Karnataka"])
};
test.returns_peoples_loving_and_liking_things = function(){
	assert.deepEqual(loves_and_likes_dishes("sweets","milk"),["Krishna"])
};
test.return_population_of_state_who_hate_particular_thing = function(){
	assert.deepEqual(people_who_hates("shah rukh khan movies"),[40000000])
};
test.returns_true_when_has_brother = function(){
	assert.equal(check_brother_for("Ali"),false)
};
test.gives_whether_he_or_she_can_do = function(){
	assert.equal(check_for_ability("Ali","fly planes"),'Yes')
};
test.gives_number_of_people_who_live_in_capitals = function(){
	assert.equal(check_for_capital(People),3)
};
test.gives_what_people_like_love_hate_and_doesntlike = function(){
	assert.equal(how_many_something_what("Male","likes","milk"),2)
};
test.returns_who_is_brother_or_sister_of_given_person= function(){
	assert.equal(who_is_brother_or_sister_of("Krishna","sister"),"Durga");
};
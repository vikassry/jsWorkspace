var getParameters = function(){
	var parameters = document.location.href.split('?')[1];
	parameters = parameters.split('&').map(function(urlPart){return Number(urlPart.split('=')[1])});
	parameters.indexOf(0)>=0 && (parameters=[6,6,6]);
	return parameters;
};

var welcome = function(){
	var gameDetails = getParameters();
	var row = gameDetails[0];
	var col = gameDetails[1];
	var bombs = gameDetails[2];
	createMineField(row,col);
	var bombPositions = createBombs(bombs,row,col);
	bombPositions.forEach(setBombs);
	countSurroundingBombs(row,col);
};

var makesString = function(object){
	return JSON.stringify(object);
};

var setBombs = function(id){
	document.getElementById(makesString(id)).value = '◙◙◙';
};

var createBombs = function(mineFieldLength,row,col){
	return randomPositionCreator(mineFieldLength,row,col);
};

var randomNumbergenerator = function(){
	return parseInt(Math.random()*10);
};

var randomPositionCreator = function(numberOfBombs,row,col){
	var positions = [];
	while(positions.length<getParameters()[2]){
		var rowPOsition = randomNumbergenerator();
		var colPOsition = randomNumbergenerator();
		var position = [rowPOsition,colPOsition];
		(rowPOsition<row && colPOsition<col) && 
		position.every(function(x){return makesString(x)!=makesString(position)}) &&  
		positions.push(position);
	};
	return positions;
};

var navigationWays = {
	north:function(){return [-1,0]},
	south:function(){return [1,0]},
	east:function(){return [0,1]},
	west:function(){return [0,-1]},
	north_east:function(){return [-1,1]},
	north_west:function(){return [-1,-1]},
	south_east:function(){return [1,1]},
	south_west:function(){return [1,-1]},
	ways:['east','west','north','south','south_west','south_east','north_west','north_east'],
	bombCounter:0,x:0,y:0
};
var countSurroundingBombs = function(row,col){
	for(var i=0;i<=row;i++){
		navigationWays.x = i;
		for(var j=0;j<=col;j++){
			var element = document.getElementById(makesString([i,j]));
			navigationWays.y=j;
			navigationWays.ways.forEach(countBomb);
			if(element && element.value!='◙◙◙')
				element.value = ''+navigationWays.bombCounter;
			navigationWays.bombCounter = 0;
		}; 
	};
};

var countBomb = function(direction){
	var position = navigationWays[direction]();
	var navigatePosition = [position[0]+navigationWays.x,position[1]+navigationWays.y];
	var searchingElement = document.getElementById(makesString(navigatePosition));
	searchingElement && searchingElement.value=='◙◙◙' && navigationWays.bombCounter++;
};

var createMineField = function(row,col){
	for(var i=0; i<row; i++){
		for(var j=0; j<col; j++){
			createButton(i,j);
		}
		var br = document.createElement('br');
		document.body.getElementsByTagName('div')[1].appendChild(br);
	}
};

var createButton = function(row,col){
    var btn = document.createElement("BUTTON");
    btn.innerHTML = '.';
    btn.setAttribute('class','button');
    btn.setAttribute('value','0');
    btn.setAttribute('id',makesString([row,col]));
	btn.setAttribute('onclick','mark(id)');
    btn.setAttribute('ondblclick','show(id)');
    btn.setAttribute('oncontextmenu','unmark(id);return false;');
    document.body.getElementsByTagName('div')[1].appendChild(btn);
};

var mark = function(id){
	document.getElementById(id).innerHTML = '☻';
};

var unmark = function(id){
	document.getElementById(id).innerHTML = '.';
};

var removeAttributes = function(Element){
	Element.removeAttribute('ondblclick');
	Element.removeAttribute('onclick');
	Element.removeAttribute('oncontextmenu');
}; 

var show = function(id){
	var Element = document.getElementById(id);
	Element.innerHTML = Element.value;
	removeAttributes(Element);
	result();
	Element.value == '0' && showAdjacentEmptyCells(id);
	Element.value == '◙◙◙' && showAllbombs();
};

var showAdjacentEmptyCells = function(id){
	navigationWays.ways.forEach(function(direction){
		naviGator(id,direction);
	})
};

var naviGator = function(id,direction){
	var actualid = eval(id);
	var actual_direction = navigationWays[direction]();
	var x_position = actualid[0]+actual_direction[0];
	var y_position = actualid[1]+actual_direction[1];
	var navigationalElement = document.getElementById(makesString([x_position,y_position]));
	if(!navigationalElement || navigationalElement.value!='0')return;
	navigationalElement.innerHTML = '0';
	removeAttributes(navigationalElement);
	naviGator(makesString([x_position,y_position]),direction);
};

var showAllbombs = function(){
	var gameDetails = getParameters();
	for(var i=0; i<gameDetails[0]; i++){
		for(var j=0; j<gameDetails[1]; j++){
			var Element = document.getElementById(makesString([i,j]));
			Element.value == '◙◙◙' && (Element.innerHTML = '◙◙◙');
		}
	}
	alert('You loose.............');
	location.reload();
};


var result = function(){
	var gameDetails = getParameters();
	var number = 0;
	for(var i=0; i<gameDetails[0]; i++){
		for(var j=1; j<gameDetails[1]; j++){
			var id = makesString([i,j]);
			document.getElementById(id).innerHTML == '↨' && 
			document.getElementById(id).value == '◙◙◙' && (number+=1);
		}
	}
	number == gameDetails[3] && alert('YOU WON!!!!!!!!!!!!!!!!!!!!!!!') && location.reload();
};

var reset = function(){
	location.reload();
};


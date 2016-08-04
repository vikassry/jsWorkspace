
var notes = [1,2,5,1000,50,100,500,20,10];

var getSortedNotes = function(notes){
	return [].concat(notes).sort(function(x,y){ return y - x; });
}

var giveNotes = function(amount, all_notes){
	all_notes = getSortedNotes(all_notes);
	var required_notes = {};
		for (var i = 0; i < all_notes.length; i++){
			var note = all_notes[i];
			var numberOfNote = Math.floor(amount / note);
			if(numberOfNote > 0){
				required_notes[note] = numberOfNote;
				amount =  amount % note;
		}
	}
	return required_notes
}


var findNotes = function(amount, all_notes){
	return getSortedNotes(all_notes).reduce(function(prev, curr){
		var numberOfNote = Math.floor(amount / curr);
		if(numberOfNote > 0){
			prev[curr] = numberOfNote;
			amount =  amount % curr;
		}	
		return prev;
	}, {});

}

console.log(giveNotes(179, notes));
console.log(findNotes(179, notes));

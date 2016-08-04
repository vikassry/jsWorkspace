
// var notes = [1,2,5,1000,50,100,500,20,10];
var notes = [1000,500,100,50,20,10,5,2,1];


// var getSortedNotes = function(notes){
// 	return [].concat(notes).sort(function(x,y){ return y - x; });
// }

var giveNotes = function(amount, all_notes){
	// all_notes = getSortedNotes(all_notes);
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

console.log(giveNotes(179, notes));

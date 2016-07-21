var sqlite3 = require('sqlite3');

var create_db = function(location){
	return function(){
		var db = new sqlite3.Database(location);
		db.run("PRAGMA foreign_keys = 'ON';");

		return db;
	}
}
exports.create_db = create_db;
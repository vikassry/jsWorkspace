var exec = require('child_process').exec;
var GET_FILE = "https://content.dropboxapi.com/1/files/auto/";
var ACCESS_TOKEN = "blW2tlEvwLQAAAAAAAAFvDge4oQuAGbKbFi0r0ko1bhk-2EfR9TQHbusd8vx2w8c";


exec('curl '+ GET_FILE+'adda/app.js -H "Authorization: Bearer '+ ACCESS_TOKEN +'"', function(error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  console.log(stdout);
});

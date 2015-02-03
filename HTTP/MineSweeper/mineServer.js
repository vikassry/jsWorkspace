var http = require('http');
var fs = require('fs');

var onContentMissing = function(req,res){
	console.log('Unhandled request:', req.url);
	res.statusCode = 404;
	res.end('FILE Not Found !!!');
};
var getContentType = function(path){
	var types = {
		jpg : 'text/jpeg',
		gif : 'text/gif',
		html : 'text/html',
		js : 'application/x-javascript',
		css : 'text/css'
	};
	var extension = path.slice(path.lastIndexOf('.') +1);
	return types[extension.toLowerCase()] || 'text/Unknown';
};

var readParameters = function(request){
	var parameters = request.url.split('?')[1];
	var param_parts = parameters.split('&');
	var parameters = param_parts.map(function(param){
		return param.split('=')[1];
	});
	return parameters;
};

var goToMineSweeper = function(req,res){
	var parameters = req.url.readParameters(req);
	console.log('parameters',parameters);
	res.writeHead(302,{Location : 'mineSweeper.html'});
	res.end(fs.readFileSync('./mineSweeper.html'));
};

var startMineSweeper = function(req, res){
	var path = req.url.slice(1);
	console.log(path);
	var content = fs.readFileSync(path);
	res.writeHead(200,{'Content-Type':getContentType(path)});
	console.log('state',path.match(/^mineSweeper/));
	if(path.match(/^mineSweeper/))
		goToMineSweeper(req,res);
	if(!fs.existsSync(path)) 
		onContentMissing(req,res);
	res.end(content);
};
var server = http.createServer(startMineSweeper).listen(8000);

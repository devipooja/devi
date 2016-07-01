var express= require('express');
var app= express();
var PORT= 2000;

var middleware = require('./middleware.js');

// var middleware= {
// 	requireAuthentication: function(req, res, next) {
// 		console.log('private route hit');
// 		next();
// 	},
// 	logger: function(req, res, next) {
// 		// new Date().toString()
// 	console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
// 		next();
// 	}
// };
	app.use(middleware.logger);

// app.use(middleware.requireAuthentication);
app.get('/about', middleware.requireAuthentication, function(req, res) {
res.send('About us');
});
app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function() {
	console.log('server started' + PORT + '!');
});


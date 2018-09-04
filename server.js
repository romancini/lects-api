var newrelic = require('./config/newrelic');
var http = require('http');
var app = require('./config/express');

if (!process.env.MONGODB_URI){
	var mongo_uri = 'mongodb://localhost/lects';
} else{
	var mongo_uri = process.env.MONGODB_URI;
}

require('./config/database')(mongo_uri);

http.createServer(app)
.listen(process.env.PORT || 3000, function() {
	console.log('Server up');
});

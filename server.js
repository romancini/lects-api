var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/lects');

http.createServer(app)
.listen(3000, function() {
	console.log('Server up');
});

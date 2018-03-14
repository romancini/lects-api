module.exports = function(uri) {

	var mongoose = require('mongoose');

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('Database connected')
	});

	mongoose.connection.on('error', function(error) {
		console.log('Connection database error: ' + error);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('Database disconnected')
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('App closed')
			process.exit(0);
		});
		
	})
};



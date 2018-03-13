module.exports = function(app) {
	
	var api = app.api.mediaType;
	app.get('/v1/mediaTypes', api.list);
};
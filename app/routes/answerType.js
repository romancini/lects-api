module.exports = function(app) {
	
	var api = app.api.answerType;
	app.get('/v1/answerTypes', api.list);
};
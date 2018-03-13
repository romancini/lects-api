module.exports = function(app) {
	
	var api = app.api.learningObj;

	app.route('/v1/learningObjs')
		.get(api.list)
		.post(api.add);

	app.route('/v1/learningObjs/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);
};
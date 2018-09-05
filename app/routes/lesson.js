module.exports = function(app) {
	
	var api = app.api.lesson;

	app.route('/v1/lessons')
		.get(api.list)
		.post(api.add);

	app.route('/v1/lessons/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);
};
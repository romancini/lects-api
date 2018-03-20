module.exports = function(app) {
	
	var api = app.api.activity;

	app.route('/v1/activitys')
		.get(api.list)
		.post(api.add);

	app.route('/v1/activitys/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);
};
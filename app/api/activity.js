var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Activity');

	api.list = function(req, res) {
		model.find()
		.then(function(activitys) {
			res.json(activitys);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id)
		.then(function(activity) {
			if (!activity) throw new Error('Atividade não encontrada');
			res.json(activity);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.removeById = function(req, res) {
		model.remove({'_id' : req.params.id})
		.then(function() {
			res.sendStatus(200);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.add = function(req, res) {
		model.create(req.body)
		.then(function(activity) {
			res.json(activity);
		}, function(error) {
			console.log('Erro ao inserir a atividade');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.update = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(activity) {
			res.json(activity);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};

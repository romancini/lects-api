var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Lesson');

	api.list = function(req, res) {
		model.find()
		.then(function(lessons) {
			res.json(lessons);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id)
		.then(function(lesson) {
			if (!lesson) throw new Error('Atividade não encontrada');
			res.json(lesson);
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
		.then(function(lesson) {
			res.json(lesson);
		}, function(error) {
			console.log('Erro ao inserir a atividade');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.update = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(lesson) {
			res.json(lesson);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};

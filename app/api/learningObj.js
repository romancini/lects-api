var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('LearningObj');

	api.list = function(req, res) {
		model.find()
		.then(function(learningObjs) {
			res.json(learningObjs);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id)
		.then(function(learningObj) {
			if (!learningObj) throw new Error('Objeto de aprendizagem não encontrado');
			res.json(learningObj);
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
		.then(function(learningObj) {
			res.json(learningObj);
		}, function(error) {
			console.log('Erro ao inserir objeto');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.update = function(req, res) {

		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(learningObj) {
			res.json(learningObj);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	return api;
};

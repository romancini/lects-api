angular.module('learningObjServices', ['ngResource'])
	.factory('resourceLearningObj', function($resource) {

		return $resource('/v1/learningObjs/:learningObjId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("registerLearningObj", function(resourceLearningObj, $q) {
		var service = {};
		service.save = function(learningObj) {
			return $q(function(resolve, reject) {

				if(learningObj._id) {
					resourceLearningObj.update({learningObjId: learningObj._id}, learningObj, function() {
						resolve({
							message: 'Objeto atualizado com sucesso',
							included: false
						});
					}, function(error) {
						console.log(error);
						reject({
							message: 'Não foi possível atualizar o Objeto'
						});
					});

				} else {
					resourceLearningObj.save(learningObj, function() {
						resolve({
							message: 'Objeto incluído com sucesso',
							included: true
						});
					}, function(error) {
						reject({
							message: 'Não foi possível incluir o Objeto'
						});
					});
				}
			});
		};
		return service;
    });
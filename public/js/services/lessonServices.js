angular.module('LessonServices', ['ngResource'])
	.factory('resourceLesson', function($resource) {
		return $resource('/v1/lessons/:lessonId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("registerLesson", function(resourceLesson, $q) {
		var service = {};
		service.save = function(lesson) {
			return $q(function(resolve, reject) {
				if(lesson._id) {
					resourceLesson.update({lessonId: lesson._id}, lesson, function() {
						resolve({
							message: 'Atividade atualizada com sucesso',
							included: false
						});
					}, function(error) {
						console.log(error);
						reject({
							message: 'Não foi possível atualizar a Atividade'
						});
					});

				} else {
					resourceLesson.save(lesson, function() {
						resolve({
							message: 'Atividade incluída com sucesso',
							included: true
						});
					}, function(error) {
						reject({
							message: 'Não foi possível incluir a Atividade'
						});
					});
				}
			});
		};
		return service;
    });
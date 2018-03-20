angular.module('ActivityServices', ['ngResource'])
	.factory('resourceActivity', function($resource) {
		return $resource('/v1/activitys/:activityId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("registerActivity", function(resourceActivity, $q) {
		var service = {};
		service.save = function(activity) {
			return $q(function(resolve, reject) {
				if(activity._id) {
					resourceActivity.update({activityId: activity._id}, activity, function() {
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
					resourceActivity.save(activity, function() {
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
angular.module('lects').controller('AnswerTypesController', function($scope, $http) {
	$http.get('/v1/answerTypes')
		.then(function(answerTypes) {
			$scope.answerTypes = answerTypes.data;
		}, function(error) {
			console.log('AnswerTypesController: ' + error);
		});
});
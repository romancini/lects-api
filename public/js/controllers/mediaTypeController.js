angular.module('lects').controller('MediaTypeController', function($scope, $http) {
	$http.get('/v1/mediaTypes')
		.then(function(mediaTypes) {
			$scope.answerTypes = mediaTypes.data;
		}, function(error) {
			console.log(error);
		});
});
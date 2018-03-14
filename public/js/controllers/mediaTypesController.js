angular.module('lects').controller('MediaTypesController', function($scope, $http) {
	$http.get('/v1/mediaTypes')
		.then(function(mediaTypes) {
			$scope.mediaTypes = mediaTypes.data;
		}, function(error) {
			console.log('MediaTypeController: ' + error);
		});
});
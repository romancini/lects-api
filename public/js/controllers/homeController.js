angular.module('lects').controller('HomeController', function($scope, resourceLearningObj, $location) {
	
	$scope.learningObjs = [];
	$scope.filter = '';
	$scope.message = '';

	resourceLearningObj.query(function(learningObjs) {
		$scope.learningObjs = learningObjs;
	}, function(error) {
		console.log(error);
	});
});
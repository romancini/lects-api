angular.module('lects').controller('HomeController', function($scope, resourceLearningObj, resourceLesson, $location) {
	
	$scope.learningObjs = [];
	$scope.lessons = [];
	$scope.filter = '';
	$scope.message = '';

	resourceLearningObj.query(function(learningObjs) {
		$scope.learningObjs = learningObjs;
	}, function(error) {
		console.log(error);
	});

	resourceLesson.query(function(lessons) {
		$scope.lessons = lessons;
	}, function(error) {
		console.log(error);
	});
});
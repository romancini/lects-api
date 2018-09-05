angular.module('lects').controller('LessonController', function ($scope, $routeParams, resourceLearningObj, resourceLesson, $window, registerLesson) {

	function init(){
		$scope.lesson = {};
		$scope.message = '';
		$scope.lesson.answers = [];
		$scope.lesson.owner = $window.sessionStorage.userLogin;
		$scope.learningObjs = [];
		resourceLearningObj.query(function(learningObjs) {
			$scope.learningObjs = learningObjs;
		}, function(error) {
			console.log(error);
		});
	}
	
	if ($routeParams.lessonId) {
		resourceLesson.get({
			lessonId: $routeParams.lessonId
		}, function (lesson) {
			$scope.lesson = lesson;
		}, function (erro) {
			console.log(erro);
			$scope.message = 'Não foi possível obter o objeto de aprendizagem'
		});
	} else {
		init();
	}

	$scope.submit = function() {
		if ($scope.editCreateForm.$valid) {
			$scope.learningObjs.forEach(function(item, index){
				if (item.selected && item.selected=='true'){
					$scope.lesson.answers.push(item._id);
				}
			});
			if ($scope.lesson.answers && $scope.lesson.answers.length > 0) {
				registerLesson.save($scope.lesson)
				.then(function(data) {
					if (data.included) {
						init();
					}
					$scope.message = data.message;
				})
				.catch(function(error) {
					$scope.message = error.message;
				});
			} else {
				$scope.message = 'Pelo menos um Objeto de Aprendizagem tem que ser escolhido';
			}
		}
	};

});
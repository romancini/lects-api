angular.module('lects').controller('LessonController', function ($scope, $routeParams, resourceLearningObj, resourceLesson, $window, registerLesson) {

	function init(){
		$scope.lesson = {};
		$scope.message = '';		
		$scope.lesson.owner = $window.sessionStorage.userLogin;
		$scope.learningObjs = [];	
		recoverLearningObjs();	
	}

	function setLearningObjsSelectedChecked(){
		$scope.learningObjs.forEach(function(item, index){
			if ($scope.lesson.learningObjs.indexOf(item._id) != -1){
				item.selected='true'
			}
		});
	}

	function recoverLearningObjs(){
		resourceLearningObj.query(function(learningObjs) {
			$scope.learningObjs = learningObjs;
			if ($routeParams.lessonId){
				setLearningObjsSelectedChecked();
			}
		}, function(error) {
			console.log(error);
		});
	}

	function recoverLessonById(){
		resourceLesson.get({
			lessonId: $routeParams.lessonId
		}, function (lesson) {
			$scope.lesson = lesson;
			recoverLearningObjs();
		}, function (erro) {
			console.log(erro);
			$scope.message = 'Não foi possível obter a lição'
		});
	}	
	
	if ($routeParams.lessonId) {
		recoverLessonById();		
	} else {
		init();
	}

	$scope.submit = function() {
		$scope.lesson.learningObjs = [];
		if ($scope.editCreateForm.$valid) {
			
			if ($scope.lesson.learningObjs && $scope.lesson.learningObjs.length > 0) {
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
angular.module('lects').controller('ActivityController', function ($scope, $routeParams, resourceLearningObj, resourceActivity, $window, registerActivity) {

	function init(){
		$scope.activity = {};
		$scope.message = '';
		$scope.activity.answers = [];
		$scope.activity.owner = $window.sessionStorage.userLogin;
		$scope.learningObjs = [];
		resourceLearningObj.query(function(learningObjs) {
			$scope.learningObjs = learningObjs;
		}, function(error) {
			console.log(error);
		});
	}
	
	if ($routeParams.activityId) {
		resourceActivity.get({
			activityId: $routeParams.activityId
		}, function (activity) {
			$scope.activity = activity;
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
					$scope.activity.answers.push(item._id);
				}
			});
			if ($scope.activity.answers && $scope.activity.answers.length > 0) {
				registerActivity.save($scope.activity)
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
angular.module('lects').controller('LearningObjController', function ($scope, $routeParams, resourceLearningObj, $window, registerLearningObj) {

	function init(){
		$scope.learningObj = {};
		$scope.message = '';
		$scope.learningObj.media_url = '';
		$scope.learningObj.answers = [
			{text: '', correct: 'true'},
			{text: '', correct: 'false'}
		];
		$scope.learningObj.owner = $window.sessionStorage.userLogin;
	}
	
	if ($routeParams.learningObjId) {
		resourceLearningObj.get({
			learningObjId: $routeParams.learningObjId
		}, function (learningObj) {
			$scope.learningObj = learningObj;
		}, function (erro) {
			console.log(erro);
			$scope.message = 'Não foi possível obter o objeto de aprendizagem'
		});
	} else {
		init();
	}

	function setRadiosToFalse(lessThisItem) {
		$scope.learningObj.answers.forEach(function(item, index){
			if (index != lessThisItem){
				item.correct = 'false';
			}
		});
	}

	$scope.resetRadios = function(){
		if ($scope.learningObj.answer_type == 'Múltipla escolha' 
			&& $scope.learningObj.answers.length > 0){
			setRadiosToFalse(0);
		}
	};

	$scope.radioChange = function(answer) {
		var indexOfAnswer = $scope.learningObj.answers.indexOf(answer);
		setRadiosToFalse(indexOfAnswer);
	};

	$scope.addNewAnswer = function(){
    	$scope.learningObj.answers.push({text:'',correct: false});
	};

	$scope.removeAnswer = function(){
		var lastItem = $scope.learningObj.answers.length-1;
		$scope.learningObj.answers.splice(lastItem);
	};

	$scope.submit = function() {
		if ($scope.editCreateForm.$valid) {
			if ($scope.learningObj.answer_type == 'Dissertativa'){
				$scope.learningObj.answers = [$scope.learningObj.answers[0]];
			}
			if ($scope.learningObj.answer_type == 'Múltipla escolha'){
				var oneCorrect = false;
				$scope.learningObj.answers.forEach(function(item, index){
					if (item.correct == 'true')
						oneCorrect = true;
				});
				if (!oneCorrect){
					$scope.message = 'Deve haver pelo menos uma resposta correta';
					return;
				}
			}
			if (!$scope.learningObj.media_type && $scope.learningObj.media_url){
				delete $scope.learningObj['media_type'];
				delete $scope.learningObj['media_url'];
			}
			registerLearningObj.save($scope.learningObj)
			.then(function(data) {				
				if (data.included) {
					init();
				}
				$scope.message = data.message;
			})
			.catch(function(error) {
				$scope.message = error.message;
			});
		}
	};

});
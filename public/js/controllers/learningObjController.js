angular.module('lects').controller('LearningObjController', function ($scope, $routeParams, resourceLearningObj) {

	$scope.learningObj = {};
	$scope.message = '';
	$scope.learningObj.answers = [
		{text: '', correct: true},
		{text: '', correct: false}
	];

	$scope.RadioChange = function (answer) {
		alert('RadioChange');
		if (answer.correct){
			answer.correct = false;
		} else{
			answer.correct = true;
		}
	};

	$scope.addNewAnswer = function(){
		var newItemNo = $scope.learningObj.answers.length+1;
    	$scope.learningObj.answers.push({text:'',correct: false});
	};

	$scope.removeAnswer = function(){
		var lastItem = $scope.learningObj.answers.length-1;
		$scope.learningObj.answers.splice(lastItem);
	};

	if ($routeParams.learningObjId) {
		resourceLearningObj.get({
			learningObjId: $routeParams.learningObjId
		}, function (learningObj) {
			$scope.learningObj = learningObj;
		}, function (erro) {
			console.log(erro);
			$scope.message = 'Não foi possível obter o objeto de aprendizagem'
		});
	}

	// $scope.submeter = function() {
	// 	if ($scope.formulario.$valid) {
	// 		cadastroDeFotos.cadastrar($scope.foto)
	// 		.then(function(dados) {
	// 			$scope.message = dados.message;
	// 			if (dados.inclusao) $scope.foto = {};
	// 		})
	// 		.catch(function(erro) {
	// 			$scope.message = erro.message;
	// 		});
	// 	}
	// };

});
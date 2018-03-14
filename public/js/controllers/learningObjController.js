angular.module('lects').controller('LearningObjController', function($scope, $routeParams, resourceLearningObj) {

	$scope.learningObj = {};
	$scope.message = '';

	if($routeParams.learningObjId) {
		resourceLearningObj.get({learningObjId: $routeParams.learningObjId}, function(learningObj) {
			$scope.learningObj = learningObj; 
		}, function(erro) {
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
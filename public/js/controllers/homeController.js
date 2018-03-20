angular.module('lects').controller('HomeController', function($scope, resourceLearningObj, $location) {
	
	$scope.learningObjs = [];
	$scope.filter = '';
	$scope.message = '';

	resourceLearningObj.query(function(learningObjs) {
		$scope.learningObjs = learningObjs;
	}, function(error) {
		console.log(error);
	});

	// $scope.remover = function(foto) {

	// 	recursoFoto.delete({fotoId: foto._id}, function() {
	// 		var indiceDaFoto = $scope.fotos.indexOf(foto);
	// 		$scope.fotos.splice(indiceDaFoto, 1);
	// 		$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
	// 	}, function(erro) {
	// 		console.log(erro);
	// 		$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
	// 	});
	// };

});
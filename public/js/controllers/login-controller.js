angular.module('lects').controller('LoginController', function($scope, $http, $location) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function() {

        var usuario = $scope.usuario;
        console.log(usuario);

        $http.post('/authenticate', {login: usuario.login, password: usuario.password})
        .then(function() {
            $location.path('/');
        }, function(erro) {
            $scope.usuario = {};
            $scope.mensagem = 'Login/Senha incorretos';
        });
    };
});
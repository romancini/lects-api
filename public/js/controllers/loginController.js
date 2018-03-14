angular.module('lects').controller('LoginController', function($scope, $http, $location) {

    $scope.user = {};
    $scope.message = '';

    $scope.authenticate = function() {

        var user = $scope.user;

        $http.post('/authenticate', {login: user.login, password: user.password})
        .then(function() {
            $location.path('/');
        }, function(erro) {
            $scope.user = {};
            $scope.message = 'Login/Senha incorretos';
        });
    };
});
angular.module('lects', ['learningObjServices', 'ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
		
		$routeProvider.when('/learningObjs', {
			templateUrl: 'partials/main.html',
			controller: 'LearningObjsController'
		});

		$routeProvider.when('/learningObjs/new', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjsController'
		});

		$routeProvider.when('/learningObjs/edit/:learningObjId', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjsController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });


		$routeProvider.otherwise({redirectTo: '/learningObjs'});

	});
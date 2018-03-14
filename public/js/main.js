angular.module('lects', ['learningObjServices', 'ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/learningObjs', {
			templateUrl: 'partials/main.html',
			controller: 'LearningObjsController'
		});

		$routeProvider.when('/learningObjs/new', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjController'
		});

		$routeProvider.when('/learningObjs/edit/:learningObjId', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });


		$routeProvider.otherwise({redirectTo: '/learningObjs'});

	});
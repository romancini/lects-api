angular.module('lects', ['LearningObjServices', 'ActivityServices','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		});

		$routeProvider.when('/learningObjs/new', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjController'
		});

		$routeProvider.when('/learningObjs/edit/:learningObjId', {
			templateUrl: 'partials/learningObj.html',
			controller: 'LearningObjController'
		});

		$routeProvider.when('/activitys/new', {
			templateUrl: 'partials/activity.html',
			controller: 'ActivityController'
		});

		$routeProvider.when('/activitys/edit/:learningObjId', {
			templateUrl: 'partials/activity.html',
			controller: 'ActivityController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });

		$routeProvider.otherwise({redirectTo: '/home'});

	});
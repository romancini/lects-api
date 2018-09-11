angular.module('lects', ['LearningObjServices', 'LessonServices','ngAnimate', 'ngRoute', 'ngResource'])
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

		$routeProvider.when('/lessons/new', {
			templateUrl: 'partials/lesson.html',
			controller: 'LessonController'
		});

		$routeProvider.when('/lessons/edit/:lessonId', {
			templateUrl: 'partials/lesson.html',
			controller: 'LessonController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });

		$routeProvider.otherwise({redirectTo: '/home'});

	});
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// home states and nested views
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})

		// about page and multiple named views
		.state('about', {

		});

});
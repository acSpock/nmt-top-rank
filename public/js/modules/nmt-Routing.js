angular.module('nmtApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	//Redirect to homepage
	$urlRouterProvider.when('', 'home');
	$urlRouterProvider.when('/', 'home');

	$urlRouterProvider.otherwise("/404");

	$stateProvider
	.state('404', {
		url: '/404',
		templateUrl: '',
		data: {
			contentPages: 1,
		}
	})
	.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'MainController',
		data: {
			contentPages: 1,
		}
	})	
	.state('dev', {
		url: '/dev',
		templateUrl: 'views/dev.html',
		controller: 'MainController',
		data: {
			contentPages: 1,
		}
	});
}]);
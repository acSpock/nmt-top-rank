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
		url: '/home?playlist',
		templateUrl: 'views/home.html',
		controller: 'MainController',
		reloadOnSearch: false,
		data: {
			contentPages: 1,
		}
	})	
	.state('dev', {
		url: '/dev',
		templateUrl: 'views/dev.html',
		controller: 'DevController',
		data: {
			contentPages: 1,
		}
	})	
	.state('playlistSearch', {
		url: '/playlist-search?val',
		templateUrl: 'views/playlistSearch.html',
		controller: 'SearchController',
		data: {
			contentPages: 1,
		}
	});
}]);
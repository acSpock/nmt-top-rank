angular.module('nmtApp')
.constant('nmtAppConfig',{
	environment: {
		dev: {
			host: 'http://localhost:3000'
		},
		prod: {
			host: 'https://nmtapp.herokuapp.com'
		}
	}
})

.factory('SpotifyService',['Restangular', 'nmtAppConfig', function(Restangular, nmtAppConfig){
	return Restangular.withConfig(function(RestangularConfigurer){
		var baseUrl = nmtAppConfig.environment.dev.host;
		RestangularConfigurer.setBaseUrl(baseUrl);
	});
}])
.factory('SpotifyAuthService', ['Restangular', function(Restangular){
	return Restangular.withConfig(function(RestangularConfigurer){
		RestangularConfigurer.setBaseUrl('https://accounts.spotify.com/authorize/?client_id=35c547d034a54d188c7138be55a5fe67&response_type=code&redirect_uri=https%3A%2F%2Flocalhost.com%2F3000');
	});
}]);
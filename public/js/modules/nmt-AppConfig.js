angular.module('nmtApp')
.constant('nmtAppConfig',{
	environment: {
		dev: {
			host: 'https://api.spotify.com/'
		}
	}
})

.factory('SpotifyService',['Restangular', 'nmtAppConfig', function(Restangular, nmtAppConfig){
	return Restangular.withConfig(function(RestangularConfigurer){
		var baseUrl = nmtAppConfig.environment.dev.host;
		RestangularConfigurer.setBaseUrl(baseUrl);
	});
}])
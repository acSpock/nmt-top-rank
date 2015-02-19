angular.module('nmtApp.services').
factory('PlaylistService', ['$log', 'SpotifyService', function($log, SpotifyService){

	var PlaylistService = {

		getPlaylist:function(playlist){
			var self = this;
			console.log('playlist', playlist);
			return SpotifyService.all('api/playlist').post(playlist).then(function(response){
				self.playlist = response;
				$log.debug('getPlaylist', self.playlist);
				return self.playlist;
			}, function(response){
				$log.debug('error', response.tracks.items);
			});
		},
	};

	return PlaylistService;

}]);

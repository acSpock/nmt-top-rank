angular.module('nmtApp.services').
factory('PlaylistService', ['$log', 'SpotifyService', function($log, SpotifyService){

	var PlaylistService = {

		getPlaylist: function(playlist){
			var self = this;
			return SpotifyService.all('api/playlist').post(playlist).then(function(response){
				self.playlist = response;
				$log.debug('getPlaylist', self.playlist);
				return self.playlist;
			}, function(response){
				$log.debug('error', response.tracks.items);
			});
		},		

		searchPlaylists: function(searchWord){
			var self = this;
			console.log('searchWord');
			return SpotifyService.one('api/searchForPlaylist' + "?search=" + searchWord).get().then(function(response){
				self.playlist = response;
				$log.debug('searchPlaylists', self.playlist);
				return self.playlist;
			}, function(response){
				$log.debug('error', response);
			});
		},

	};

	return PlaylistService;

}]);

angular.module('nmtApp.services').
factory('PlaylistService', ['$log', 'SpotifyService', function($log, SpotifyService){

	var PlaylistService = {

		getPlaylistById : function(userId, playlistId){
			var self = this;
			return SpotifyService.one('v1/users', 'spotify').one('playlists', '1yHZ5C3penaxRdWR7LRIOb').get().then(function(response){
				self.playlist = response;
				$log.debug('getPlaylistById', self.playlist);
				return self.playlist;
			}, function(response){
				$log.debug('error', response);
			});
		}
	};

	return PlaylistService;

}]);

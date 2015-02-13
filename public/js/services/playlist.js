angular.module('nmtApp.services').
factory('PlaylistService', ['$log', 'SpotifyService', function($log, SpotifyService){

	var PlaylistService = {

		getPlaylistById = function(userId, playlistId){
			var this = self;
			return SpotifyService.one('v1/users', userId).one('playlists', playlistId).get().then(function(response){
				self.playlist = response;

				$log.debug('getPlaylistById', self.playlist);
				return self.playlist
			}, function(response){
				$log.debug('error', response);
			});
		}
	}	
}])

angular.module('nmtApp.services').
factory('PlaylistService', ['$log', 'SpotifyService', function($log, SpotifyService){

	var PlaylistService = {

		getNMT : function(userId, playlistId){
			var self = this;
			return SpotifyService.one('api/nmt').get().then(function(response){
				self.nmtPlaylist = response;
				$log.debug('getNMT', self.nmtPlaylist.tracks.items);
				return self.nmtPlaylist;
			}, function(response){
				$log.debug('error', response.tracks.items);
			});
		}
	};

	return PlaylistService;

}]);

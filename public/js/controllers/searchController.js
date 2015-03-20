angular.module('nmtApp.controllers').
controller('SearchController', ['$scope', 'PlaylistService', '$filter', '$state', '$stateParams', '$rootScope', function($scope, PlaylistService, $filter, $state, $stateParams, $rootScope){ 
	$scope.foundPlaylist = null;
	$scope.foundPlaylistMeta = null;
	$scope.searchWord = null;

	$scope.searchPlaylist = function(){
		PlaylistService.searchPlaylists($scope.searchWord).then(function(response){
			$scope.foundPlaylist = response.playlists.items;
			$scope.foundPlaylistMeta = response;
		});
	};

	$scope.getPlaylist = function(playlistUri){
		$rootScope.playlistURI = playlistUri;
		$state.go('home');
	};

}]);
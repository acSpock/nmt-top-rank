angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', function($scope, PlaylistService){
	$scope.playlist = null;

	$scope.getPlaylistById = function(userId, playlistId){
		PlaylistService.getPlaylistById().then(function(response){
			$scope.playlist = response;
		});
	};

	$scope.getPlaylistById();

}]);
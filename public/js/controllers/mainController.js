angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', function($scope, PlaylistService){
	$scope.nmt = null;
	$scope.nmtMeta = null;
	$scope.playlistURI = 'http://open.spotify.com/user/spotify/playlist/1GQLlzxBxKTb6tJsD4RxHI';
	$scope.user = null;
	$scope.playlist = null;
	var httpSliced = null;
	var uriSliced = null;

	$scope.getNMT = function(){
		PlaylistService.getNMT().then(function(response){
			$scope.nmt = response.tracks.items;
			$scope.nmtMeta = response;
		});
	};

	/*
	* got to parse URI for http links or URI links - YOLO ** 
	* grabs user name and playlist #
	*/
	
	$scope.parseURI = function(){
		if($scope.playlistURI.substring(0,4) === "http"){
			httpSliced = $scope.playlistURI.split('/');
			$scope.user = httpSliced[4];
			$scope.playlist = httpSliced[6];
		}else{
			uriSliced = $scope.playlistURI.split(':');
			$scope.user = uriSliced[2];
			$scope.playlist = uriSliced[4];
		}
	};

	$scope.getPlaylist = function(user, uri){

	};

	//$scope.getNMT();
	

}]);
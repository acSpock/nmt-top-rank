angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', '$filter', '$state', '$stateParams', '$rootScope', function($scope, PlaylistService, $filter, $state, $stateParams, $rootScope){
	$scope.user = null;
	$scope.playlist = null;
	$scope.playlistMeta = null;
	$scope.spotify = [{user: null, playlist: null}];
	var httpSliced = null;
	var uriSliced = null;

	/*
	* got to parse URI for http links or URI links - YOLO ** 
	* grabs user name and playlist #
	*/
	
	$scope.parseURI = function(){
		if($rootScope.playlistURI.substring(0,4) === "http"){
			httpSliced = $rootScope.playlistURI.split('/');
			$scope.spotify[0].user = httpSliced[4];
			$scope.spotify[0].playlist = httpSliced[6];
		}else{
			uriSliced = $rootScope.playlistURI.split(':');
			$scope.spotify[0].user = uriSliced[2];
			$scope.spotify[0].playlist = uriSliced[4];
		}
	};

	$scope.getPlaylist = function(){
		$scope.parseURI();
		PlaylistService.getPlaylist($scope.spotify).then(function(response){
			$scope.playlist = response.tracks.items;
			$scope.playlistMeta = response;
		});
	};

	$scope.getNMT = function(){
		$scope.spotify[0].user = 'spotify';
		$scope.spotify[0].playlist = '1yHZ5C3penaxRdWR7LRIOb';
		PlaylistService.getPlaylist($scope.spotify).then(function(response){
			$scope.playlist = response.tracks.items;
			$scope.playlistMeta = response;
		});
	};	

	if($rootScope.playlistURI){
		$scope.getPlaylist();
	}

}]);
angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', '$filter', '$state', '$stateParams', '$rootScope', '$sce', '$http', function($scope, PlaylistService, $filter, $state, $stateParams, $rootScope, $sce, $http){
	$scope.user = null;
	$scope.playlist = null;
	$scope.playlistMeta = null;
	$scope.spotify = [{user: null, playlist: null}];
	$scope.playlistURI = $stateParams.playlist;
	$scope.currentlySelectedSong = null;
	$scope.currentSongUrl = null;
	$scope.nowPlayingImage = null;
	$scope.playSpotify = null;
	
	$scope.playPreview = null;
	$scope.playSpotify = null;

	var httpSliced = null;
	var uriSliced = null;
	var totalCount = 0;

	/*
	* got to parse URI for http links or URI links - YOLO ** 
	* grabs user name and playlist #
	*/
	
	$scope.parseURI = function(){
		if($scope.playlistURI.substring(0,4) === "http"){
			httpSliced = $rootScope.playlistURI.split('/');
			$scope.spotify[0].user = httpSliced[4];
			$scope.spotify[0].playlist = httpSliced[6];
		}else{
			uriSliced = $scope.playlistURI.split(':');
			$scope.spotify[0].user = uriSliced[2];
			$scope.spotify[0].playlist = uriSliced[4];
		}
	};

	$scope.getPlaylist = function(){
		$scope.parseURI();
		PlaylistService.getPlaylist($scope.spotify).then(function(response){
			try{
				if(response.tracks.items){
					$scope.playlist = response.tracks.items;
					$scope.playlistMeta = response;
					if($scope.playlistMeta.tracks.next){
						$scope.spotify[0].options = {offset: parseInt($scope.playlistMeta.tracks.next.split("=")[1].substring(0,3)), limit:100};
						$scope.getPlaylist();
						count += 1;
					}
				}
			}catch(e){
				if(response.items){
					$scope.playlist = $scope.playlist.concat(response.items);
					if(response.next){
						$scope.spotify[0].options = {offset: parseInt(response.next.split("=")[1].substring(0,3)), limit:100};
						$scope.getPlaylist();
						count += 1;
					}
				}
			}
		});
	};

	$rootScope.getNMT = function(){
		$scope.playlistURI = "spotify:user:spotify:playlist:1yHZ5C3penaxRdWR7LRIOb";
		$scope.spotify = [{user: null, playlist: null}];
		$scope.spotify[0].user = 'spotify';
		$scope.spotify[0].playlist = '1yHZ5C3penaxRdWR7LRIOb';
		PlaylistService.getPlaylist($scope.spotify).then(function(response){
			$scope.playlist = response.tracks.items;
			$scope.playlistMeta = response;
		});
	};	

	$scope.playSong = function(img, previewUrl, i){
		$scope.playSpotify = false;
		$scope.currentSongUrl = $sce.trustAsResourceUrl(previewUrl);
		$scope.nowPlayingImage = img;

	};

	$scope.playInsideSpotify = function(uri){
		$scope.playSpotify = true;
		document.getElementById('previewControl').pause();
		$scope.playSpotify = $sce.trustAsResourceUrl(uri);

	};

	if($scope.playlistURI){
		$scope.getPlaylist();
	}

}]);
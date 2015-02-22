angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', '$filter', function($scope, PlaylistService, $filter){
	$scope.playlistURI = null;
	$scope.user = null;
	$scope.playlist = null;
	$scope.playlistMeta = null;
	$scope.spotify = [{user: null, playlist: null}];
	var httpSliced = null;
	var uriSliced = null;


	/*a
	* got to parse URI for http links or URI links - YOLO ** 
	* grabs user name and playlist #
	*/
	
	$scope.parseURI = function(){
		if($scope.playlistURI.substring(0,4) === "http"){
			httpSliced = $scope.playlistURI.split('/');
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
			$scope.playlist = response.tracks.items;
			$scope.playlistMeta = response;
			}
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
	

}]);
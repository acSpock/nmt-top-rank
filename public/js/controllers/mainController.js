angular.module('nmtApp.controllers').
controller('MainController', ['$scope', 'PlaylistService', function($scope, PlaylistService){
	$scope.nmt = null;
	$scope.nmtMeta = null;

	$scope.getNMT = function(){
		PlaylistService.getNMT().then(function(response){
			$scope.nmt = response.tracks.items;
			$scope.nmtMeta = response;
		});
	};

	$scope.getNMT();
	

}]);
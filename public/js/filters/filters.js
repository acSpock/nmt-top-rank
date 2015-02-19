angular.module('nmtApp.filters').
filter('object2Array', [function(){
	return function(input) {
		for(var i in input){
			input[i].popularity = input[i].track.popularity;
		}
		return input;
	};
}]);
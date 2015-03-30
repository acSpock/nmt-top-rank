angular.module('nmtApp.filters').
filter('object2Array', [function(){
	return function(input) {
		for(var i in input){
			input[i].popularity = input[i].track.popularity;
		}
		return input;
	};
}])
.filter('popularityFilter', [function(){
	return function(input, value){
		var filtered = [];
		if(!value){
			return input;
		}
		for(var i in input){
			if (input[i].popularity > parseInt(value)){
				filtered.push(input[i]);
			}
		}
		return filtered;
	};
}]);
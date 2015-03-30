angular.module('nmtApp.directives').
directive("sort", function() {
return {
		restrict: 'A',
		transclude: true,
		template : 
			'<a ng-click="onClick()">'+
				'<span ng-transclude></span>'+ 
				' <i style="color: #428bca" class="fa fa-sort"></i>' +
			'</a>',
		scope: {
			order: '=',
			by: '=',
			reverse : '=',
			init: '='
		},
		link: function(scope, element, attrs) {
			if(scope.init){
				scope.by = scope.init;
			}
			
			scope.onClick = function () {
				if( scope.order === scope.by ) {
					scope.reverse = !scope.reverse; 
				} else {
					scope.by = scope.order ;
					scope.reverse = true; 
				}
			};
		}
};
});
angular.module('nmtApp.controllers').
controller('DevController', ['$scope', '$http', '$log' ,function($scope, $http, $log){
	
	$scope.formData = {};
	$scope.todos = null;
	//get all todos on page load

	$http.get('/api/todos')
	.success(function(data){
		$scope.todos = data;
		$log.debug('GET ALL TODOS: ', data);
	})
	.error(function(data){
		$log.debug('GET ALL TODOS ERROR: ', data);
	});


	//CREATE TODO
	$scope.createTodo = function(){
		$scope.formData.time = moment().format('MMMM Do YYYY, h:mm:ss a');
		$http.post('api/todos', $scope.formData)
		.success(function(data){
			$scope.formData = {};
			$scope.todos = data;
			$log.debug('DATA: ', data);
		})
		.error(function(data){
			$log.debug('CREATE TODO ERROR: ', data);

		});
	};

	//DELETE TODO 
	$scope.deleteTodo = function(id){
		$http.delete('api/todos/' + id)
			.success(function(data){
				$scope.todos = data;
				$log.debug('DATA: ', data);
			})
			.error(function(data){
				$log.debug('DATA: ', data);
			});
	};
	

}]);
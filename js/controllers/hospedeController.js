(function () {
	'use strict'

	angular
	.module('myapp')

	.controller('hospedeController', hospedeController);

	hospedeController.$inject = ['hospedeAPI', $scope];

	function hospedeController(hospedeAPI, $scope) {
		$scope.hospedes = [];
		$scope.result;

		$scope.list = function(){
			hospedeAPI.list().success(function(data){
				$scope.hospedes = data;
			});
		}

		$scope.list1 = function(){
			hospedeAPI.list1().success(function(data){
				$scope.hospedes = data;
			});
		}
		// $scope.delete = function(id){
		// 	hospedeAPI.delete().success(function(data){
		// 		$scope.result = data;
		// 	});
		// }

		
	}

})()
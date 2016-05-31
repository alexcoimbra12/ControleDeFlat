(function () {
	'use strict'

	angular
	.module('myapp')

	.controller('hospedeController', hospedeController);

	hospedeController.$inject = ['hospedeAPI', $scope];

	function hospedeController(hospedeAPI, $scope) {
		$scope.hospedes = [];

		$scope.list = function(){
			hospedeAPI.list().success(function(data){
				$scope.hospedes = data;
			});
		}
	}
})()
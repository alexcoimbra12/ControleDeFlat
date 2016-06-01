(function () {
	'use strict'

	angular
	.module('myapp')

	.controller('imobiliariaController', imobiliariaController);

	imobiliariaController.$inject = ['imobiliariaAPI', $scope];

	function imobiliariaController(imobiliariaAPI, $scope) {
		$scope.imobiliarias = [];

		$scope.list = function(){
			imobiliariaAPI.list().success(function(data){
				$scope.imobiliarias = data;
			});
		}
	}
})()
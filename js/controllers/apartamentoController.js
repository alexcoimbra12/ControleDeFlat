(function () {
	'use strict'

	angular.module('myapp').controller('apartamentoController', function apartamentoController(apartamentoAPI, $scope) {
		
		$scope.apartamentos = [];

		$scope.list = function(){
			apartamentoAPI.list().success(function(data){
				$scope.apartamentos = data;
			});
		}
		
	});

})()
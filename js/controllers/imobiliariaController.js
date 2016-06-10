(function () {
	'use strict'

	angular.module('myapp').controller('imobiliariaController', function (imobiliariaAPI, $scope) {
		
		$scope.imobiliarias = [];

		$scope.nome = "";
		$scope.endereco = "";
		$scope.telContato = "";
		$scope.nomeCorretor = "";
		$scope.numCreci = "";

		$scope.result = "";

		$scope.list = function(){
			
			imobiliariaAPI.list().success(function(data){

				$scope.imobiliarias = data;

			});

		}

		$scope.save = function(){

			var data1 = {
	            nome: $scope.nome,
	            endereco: $scope.endereco,
	            telContato: $scope.telContato,
	            nomeCorretor: $scope.nomeCorretor,
	            numCreci: $scope.numCreci
     	   };

			imobiliariaAPI.save(data1).success(function(data){
				$scope.result = "success"
				alert($scope.result);
			});
		}
	});


	
})()
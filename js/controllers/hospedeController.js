(function () {
	'use strict'

	angular.module('myapp').controller('hospedeController', function hospedeController(hospedeAPI, $scope) {
		
		$scope.hospedes = [];

		$scope.nome = "";
		$scope.cpf = "";
		$scope.telefone = "";
		$scope.apartamento = {
			apartamento: null
		}
		$scope.imobiliaria = {
			imobiliaria: null
		}
		$scope.result = "";

		$scope.list = function(){
			
			hospedeAPI.list().success(function(data){
				$scope.hospedes = data;
			});
		}

		$scope.save = function(){

			var data1 = {
				"nome": $scope.nome,
	            "cpf": $scope.cpf,
	            "telefone": $scope.telefone,
	            "apartamento": JSON.parse($scope.apartamento.apartamento),
	            "imobiliaria": JSON.parse($scope.imobiliaria.imobiliaria)
        	};

			hospedeAPI.save(data1).success(function(data){
				$scope.result = "sucess";
			});
		}

		$scope.delete = function(id){
			
			hospedeAPI.delete(id).success(function(data){
				$scope.reloadRoute = function() {
 				  $route.reload();
				}
			});
		}
		
	});

})()
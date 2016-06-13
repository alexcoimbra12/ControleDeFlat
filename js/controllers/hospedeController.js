(function () {
	'use strict'

	angular.module('myapp').controller('hospedeController', function hospedeController(hospedeAPI, $scope) {
		
		$scope.hospedes = [];

		$scope.hospede = {
			nome: "",
			cpf: "",
			telefone: "",
			message: "",
			apartamento: {
				apartamento: null
			},
			imobiliaria: {
				imobiliaria: null
			}
		}
		$scope.name = "";
		$scope.result = true;

		$scope.listName = function(){
			
			hospedeAPI.listName($scope.name).success(function(data){
				$scope.hospedes = data;

			});
		}

		$scope.save = function(){

			var data1 = {
				"nome": $scope.hospede.nome,
	            "cpf": $scope.hospede.cpf,
	            "telefone": $scope.hospede.telefone,
	            "apartamento": JSON.parse($scope.hospede.apartamento.apartamento),
	            "imobiliaria": JSON.parse($scope.hospede.imobiliaria.imobiliaria)
        	};

			hospedeAPI.save(data1).success(function(data){
				$scope.hospede = {};
				swal("Muito Bem!", "Hospede Cadastrado com Sucesso!", "success");

			});
		}

		$scope.delete = function(id){
					
				swal({   title: "Você tem certeza?",   text: "Você não conseguirá recuperar este Hospede depois",   
					type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   
					confirmButtonText: "Sim, deletar!",   closeOnConfirm: false }, 
					function(){   
						hospedeAPI.delete(id).success(function(data){
						swal("Deletado!", "O hospede foi deletado com Sucesso", "success"); 
						
						setTimeout( function() {

						hospedeAPI.listName($scope.name).success(function(data){
							if(data == 0){
								swal("Não encontramos outros Hospedes com o nome " + $scope.name + " Tente buscar outro Hospede")
								$scope.result = false;
							}else{
								$scope.hospedes = data;
							}
					});
						}, 1000 );
				});
			});
		}
		
	});

})()

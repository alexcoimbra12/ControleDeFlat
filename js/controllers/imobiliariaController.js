(function () {
	'use strict'

	angular.module('myapp').controller('imobiliariaController', function imobiliariaController(imobiliariaAPI, $scope) {
		
		$scope.ordenar = function(keyname){
	        $scope.sortKey = keyname;
	        $scope.reverse = !$scope.reverse;
    	};


		$scope.imobiliarias = [];

		$scope.imobiliaria = {
			nome: "",
			endereco: "",
			telContato: "",
			nomeCorretor: "",
			numCreci: ""
		}
		$scope.name = "";
		$scope.result = true;

		$scope.listName = function(){
			
			imobiliariaAPI.listName($scope.name).success(function(data){
				if(data == 0){
					if($scope.name == ""){
						swal("Não encontramos Imobiliarias cadastre uma e Tente novamente")
					}else{
						swal("Não encontramos Imobiliarias com o nome " +$scope.name + " tente outra")
					}
					
				}else{
					$scope.result = true;
					$scope.imobiliarias = data;
				}

			});

		}

		$scope.save = function(){

			var data1 = {
	            nome: $scope.imobiliaria.nome,
	            endereco: $scope.imobiliaria.endereco,
	            telContato: $scope.imobiliaria.telContato,
	            nomeCorretor: $scope.imobiliaria.nomeCorretor,
	            numCreci: $scope.imobiliaria.numCreci
     	   };

			imobiliariaAPI.save(data1).success(function(data){
				$scope.imobiliaria = {};
				swal("Muito Bem!", "Imobiliaria Cadastrada com Sucesso!", "success");
			});
		}

		$scope.delete = function(id){
					
			swal({   title: "Você tem certeza?",   text: "Você não conseguirá recuperar esta Imobiliaria depois",   
				type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Sim, deletar!",   closeOnConfirm: false }, 
				function(){   
					imobiliariaAPI.delete(id).success(function(data){
					swal("Deletado!", "A imobiliaria foi deletada com Sucesso", "success"); 
					setTimeout( function() {
						imobiliariaAPI.listName($scope.name).success(function(data){
							if(data == 0){
								swal("Não encontramos outra Imobiliaria com o nome " + $scope.name + " Tente buscar outra Imobiliaria")
								$scope.result = false;
							}else{
								$scope.imobiliarias = data;
							}
						});
					}, 1000 );
				});
			});
		}
		
		$scope.edit = function(imobiliaria){

			imobiliariaAPI.edit(imobiliaria).success(function(data){
				swal("Muito Bem!", "Imobiliaria Atualizada com Sucesso!", "success");

			});
		}

	});
})()
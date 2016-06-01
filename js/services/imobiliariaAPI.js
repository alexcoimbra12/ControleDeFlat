(function () {
	'use strict'

	angular
	.module('myapp')

	.factory('imobiliariaAPI', imobiliariaAPI);

	imobiliariaAPI.$inject = [$http];
	
	function imobiliariaAPI($http) {
		var _list = function(){
			return $http.get('http://localhost:8080/FlatWS/imobiliaria/getImobiliaria');
		};
		return {
			list:_list
		}

		var _save = function(){
			
		}
	}
})()
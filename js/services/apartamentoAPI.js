(function () {
	'use strict'

	angular.module('myapp').factory('apartamentoAPI', 	function apartamentoAPI($http) {
		var _list = function(){
			return $http.get('http://localhost:8080/FlatWS/apartamento/api/get/');
		};
		
		return {
			list:_list
		}

	});
	


})()
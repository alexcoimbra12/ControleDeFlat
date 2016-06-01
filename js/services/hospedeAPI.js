(function () {
	'use strict'

	angular
	.module('myapp')

	.factory('hospedeAPI', hospedeAPI);

	hospedeAPI.$inject = [$http];
	
	function hospedeAPI($http) {
		var _list = function(){
			return $http.get('http://localhost:8080/FlatWS/hospede/getHospedes');
		};
		return {
			list:_list
		}

		var _save = function(){

		}
	}
})()
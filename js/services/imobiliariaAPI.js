(function () {
	'use strict'

	angular.module('myapp').factory('imobiliariaAPI', function ($http) {

		var _list = function(){
			return $http.get('http://localhost:8080/FlatWS/imobiliaria/api/get/');
		};


		var _save = function(data){
			return $http.post('http://localhost:8080/FlatWS/imobiliaria/api/post/', data);
		};

		return {
			save:_save,
			list:_list
		}
	});
	
})()
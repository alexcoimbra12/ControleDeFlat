(function () {
	'use strict'

	angular.module('myapp').factory('imobiliariaAPI', function imobiliariaAPI($http) {

		var _listName = function(name){
			return $http.get('http://localhost:8080/FlatWS/imobiliaria/api/get/' + name);
		};

		var _save = function(data){
			return $http.post('http://localhost:8080/FlatWS/imobiliaria/api/post/', data);
		};

		var _delete = function(id){
			return $http.delete('http://localhost:8080/FlatWS/imobiliaria/api/delete/' + id);
		};

		var _edit = function(data){
			return $http.put('http://localhost:8080/FlatWS/imobiliaria/api/put/', data);
		};


		return {
			save:_save,
			listName:_listName,
			delete:_delete,
			edit:_edit
		}
	});
	
})()
(function () {
	'use strict'

	angular.module('myapp').factory('hospedeAPI', function hospedeAPI($http) {
		
		var _listName = function(name){
			return $http.get('http://localhost:8080/FlatWS/hospede/api/get/' + name)
		};

		var _save = function(data){
			return $http.post('http://localhost:8080/FlatWS/hospede/api/post/', data);
		};


		var _delete = function(id){
			return $http.delete('http://localhost:8080/FlatWS/hospede/api/delete/' + id);
		};

		var _edit = function(data){
			return $http.put('http://localhost:8080/FlatWS/hospede/api/put/', data);
		};

		return {
			save:_save,
			delete:_delete,
			listName:_listName,
			edit:_edit
		}

	}
);
})()
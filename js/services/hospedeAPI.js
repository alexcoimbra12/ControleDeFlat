(function () {
	'use strict'

	angular.module('myapp').factory('hospedeAPI', 	function hospedeAPI($http) {
		
		var _list = function(){
			return $http.get('http://localhost:8080/FlatWS/hospede/api/get/')
		};

		var _save = function(data){
			return $http.post('http://localhost:8080/FlatWS/hospede/api/post/', data);
		};


		var _delete = function(id){
			return $http.delete('http://localhost:8080/FlatWS/hospede/api/delete/' + id);
		};

		return {
			save:_save,
			list:_list,
			delete:_delete
		}

	}
);

	

})()
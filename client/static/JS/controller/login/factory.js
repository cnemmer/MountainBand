//Users Factory
myApp.factory('UserFactory', function($http){
	var factory = {}

	factory.create = function(input, callback){
		$http.post('/users', input).success(callback)
	}

	return factory

}) //Closes UserFactory
	


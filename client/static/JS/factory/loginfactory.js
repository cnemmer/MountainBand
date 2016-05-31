myApp.factory('UserFactory', function($http){
	var factory = {}

	factory.create = function(input, callback){
		$http.post('/users', input).success(callback)
	}

	// console.log('hello');

	return factory

})

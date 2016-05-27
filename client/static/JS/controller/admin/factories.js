myApp.factory('AdminProductFactory', function($http){
	var factory ={};

	factory.index = function(callback){
		$http.get('/adminproducts').success(callback)
	}

	factory.create = function(input, callback){
		$http.post('/adminproducts', input).success(callback)
	}

	return factory;
})
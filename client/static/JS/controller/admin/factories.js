//Admin Products Factory
myApp.factory('AdminProductFactory', function($http){
	var factory ={};

	factory.index = function(callback){
		$http.get('/adminproducts').success(callback)
	}

	factory.create = function(input, callback){
		$http.post('/adminproducts', input).success(callback)
	}

	factory.show = function(id, callback){
		$http.get('/adminproducts/'+ id).success(callback)
	}

	factory.update = function(id, input,  callback, callback2){
		$http.put('/adminproducts/'+ id, input).success(function(){
			callback;
			callback2(id);
		})
	}
	
	return factory;

}) //Closes AdminProductsFactory 
myApp.factory('CheckoutFactory', function($http){
	var checkouts = {};

	checkouts.index = function(callback){
		$http.get('/checkout').success(callback);
	}

	checkouts.create = function(input,callback){
		$http.post('/checkout', input).success(callback)
	}

	return checkouts;
})
myApp.factory('PaymentFactory', function($http){
	var payments = {};

	payments.index = function(){
		$http.get('/checkout').success();
	}

	payments.createCust = function(input){
		$http.post('/checkout',input).success();
	}

	return payments;
})
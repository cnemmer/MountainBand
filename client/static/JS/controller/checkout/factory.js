//Checkout Factory
myApp.factory('CheckoutFactory', function($http){
	var checkouts = {};
	checkouts.clientSubmittedInfo;

	checkouts.index = function(callback){
		$http.get('/checkout').success(callback);
	}

	checkouts.custInfo = function(input, callback){
		checkouts.clientSubmittedInfo = input;
		callback(input);
	}

	return checkouts;
	
}) //Closes CheckoutFactory

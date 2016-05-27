myApp.factory('PaymentFactory', function($http){
	var payments = {};

	payments.createCust = function(input){
		console.log(input)
	}

	return payments;
})
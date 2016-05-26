var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('CheckoutFactory', function($http){
	var checkouts = {};
	checkouts.clientSubmittedInfo;

	
	checkouts.index = function(callback){
		$http.get('/checkout').success(callback);
	}

	checkouts.create = function(input,callback){
		$http.post('/checkout', input).success(function(clientInfo){
			checkouts.clientSubmittedInfo = clientInfo;
			callback();
		})
	}

	return checkouts;
})

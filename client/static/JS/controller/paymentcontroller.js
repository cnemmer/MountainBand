myApp.controller('PaymentController', function(CheckoutFactory,PaymentFactory, $location, $rootScope){
	var self = this;

	this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	
	this.createCust = function(input){
		PaymentFactory.createCust(input);
	}

	this.redirectURL = function() {
		console.log('before $location');
		$rootScope.$apply(function() {
			$location.path('/receipt');
		console.log($location);	
		})
		
	}

})
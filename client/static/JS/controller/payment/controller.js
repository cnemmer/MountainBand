//Payment Controller
myApp.controller('PaymentController', function(CheckoutFactory,PaymentFactory, ProductsFactory, $location, $rootScope){
	var self = this;

	this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	this.productForCheckout = ProductsFactory.productInfoById;
	
	this.createCust = function(input){
		PaymentFactory.createCust(input);
	}

	this.redirectURL = function() {
		$rootScope.$apply(function() {
			$location.path('/receipt');	
		})
	}
		
}) //Closes Payment Controller
myApp.controller('PaymentController', function(CheckoutFactory,PaymentFactory){
	var self = this;

	this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	
	this.createCust = function(input){
		PaymentFactory.createCust(input);
	}


})
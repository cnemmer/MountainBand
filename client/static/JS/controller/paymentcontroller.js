myApp.controller('PaymentController',  function(CheckoutFactory, PaymentFactory){
	var self = this;

	this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	console.log(this.clientSubmittedInfo);
	
	this.createCust = function(input){
		PaymentFactory.create(input, function(){
			console.log("hello");
			//self.index();
			//$location.path('/payment');
		})
	}


})
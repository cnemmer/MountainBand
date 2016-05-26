myApp.controller('CheckoutController',  function(CheckoutFactory, $location){
	var self = this;
	//this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	this.newCustomer = CheckoutFactory.clientSubmittedInfo;

	this.index = function(){
		CheckoutFactory.index(function(data){
			self.customers = data;
			self.newCustomer = {};
		})
	}

	this.createCust = function(input){
		CheckoutFactory.create(input, function(){
			self.index();
			$location.path('/payment');
		})
	}
})
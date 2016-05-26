myApp.controller('CheckoutController',  function(CheckoutFactory){
	var self = this;

	this.index = function(){
		CheckoutFactory.index(function(data){
			self.customers = data;
			self.newCustomer = {};
		})
	}

	this.createCust = function(input){
		CheckoutFactory.create(input, function(){
			self.index();
		})
	}
})
myApp.controller('CheckoutController',  function(CheckoutFactory, $location, $routeParams){
	var self = this;
	//this.clientSubmittedInfo = CheckoutFactory.clientSubmittedInfo;
	this.newCustomer = CheckoutFactory.clientSubmittedInfo;

	this.index = function(){
			self.newCustomer = {};
	}

	this.proceedToPayment = function(customerInfo){
		CheckoutFactory.custInfo(customerInfo, function(custData){
			self.custData = custData;
			$location.path('/payment');
		});
	}

	this.index();

}) /*Closes CheckoutController*/


	

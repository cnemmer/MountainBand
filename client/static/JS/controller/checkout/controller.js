//Checkout Controller
myApp.controller('CheckoutController',  function(CheckoutFactory, ProductsFactory, $location, $routeParams){
	var self = this;
	
	this.newCustomer = CheckoutFactory.clientSubmittedInfo;
	this.productForCheckout = ProductsFactory.productInfoById;

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

}) //Closes CheckoutController
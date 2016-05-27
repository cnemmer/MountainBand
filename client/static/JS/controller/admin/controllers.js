myApp.controller('AdminProductController', function(AdminProductFactory){
	var self = this;

	this.products;

	this.index = function(){
		AdminProductFactory.index(function(data){
			self.products = data;
			self.newProduct = {}

			console.log(data)
		})
	}

	this.create = function(input){
		input.moment = moment().format("MMM Do YY");
		AdminProductFactory.create(input, self.index)
	}

	this.index();
})
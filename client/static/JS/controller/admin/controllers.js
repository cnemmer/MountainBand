//Admin Products Controller
myApp.controller('AdminProductController', function(AdminProductFactory, $routeParams){
	var self = this;

	this.products;
	this.edit;

	this.index = function(){
		AdminProductFactory.index(function(data){
			self.products = data;
			self.newProduct = {}
		})
	}

	this.create = function(input){
		input.moment = moment().format("MMM Do YY");
		AdminProductFactory.create(input, self.index)
	}

	this.show = function(id){
		AdminProductFactory.show(id, function(data){
			self.edit = data;
		})
	}

	this.update = function(id, input){
		console.log(id, input);
		AdminProductFactory.update(id, input, self.index, self.show);
	}

	this.show($routeParams.id);

	this.index();

}) //Closes AdminProductsController

myApp.factory('ProductsFactory', function($http){
	var products = {};


	//Method To Retrieve Product Selected For Purchase
	//Callback Changes Path Location To Checkout 
	products.sendProdToCheckout = function(productId, callback){
		$http.get('/products/' + productId).success(function(data){
			products.productInfoById = data;
			callback();	
		});
	}

	return products;
	
}) //Closes ProductsFactory
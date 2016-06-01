myApp.controller("ProductsController", function(ProductsFactory, AdminProductFactory, CheckoutFactory, $location){
	var self = this;

	//Method To Retrieve All Products For Display 
  this.getProdsFromDatabase = function(){
    AdminProductFactory.index(function(data){
      self.products = data;
    })
  }


  //Method To Send All Info On This Product To Checkout Page
  this.sendProdToCheckout = function(productId){
  	ProductsFactory.sendProdToCheckout(productId, function(){
  		$location.path('/checkout');
  	});
  }
  
  //Call getProdsFromDatabase To Load products.html With All Products
  this.getProdsFromDatabase();
 })



















  /*$scope.open = function(size){
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: "products.html",
      controller: "ProductsController",
      size: size,
      resolve: {
        getProds(){
          return $scope.products;
        }
      }
    });
    modelInstance.result.then(function(){
    })
  }*/
      

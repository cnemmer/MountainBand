myApp.controller("ProductsController", function(ProductsFactory, AdminProductFactory, CheckoutFactory, $location){
	var self = this;

  this.getProdsFromDatabase = function(){
    AdminProductFactory.index(function(data){
      self.products = data;
    })
  }

  this.sendProdToCheckout = function(productId){
  	
  }

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
      

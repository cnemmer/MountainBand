myApp.controller("ProductsController", function($scope, ProductsFactory, AdminProductFactory, $location, CheckoutFactory){
  var self = this;
  // $scope.products = ProductsFactory.products;
  // console.log($scope.products);
  function getProds(){
    AdminProductFactory.index(function(data){
      console.log(data);
      $scope.products = data;
    })
  }
  getProds();

  $scope.addProduct = function(){
    ProductsFactory.create($scope.newProduct, function(data){
      $scope.products = data;
      $scope.newProduct = {};
      $location.path("/products");
    });

  }

  $scope.createCust = function(id){

    
    //$location.path("/checkout/" + id);
  }


})

myApp.controller("ProductsController", function($scope, ProductsFactory, $location, CheckoutFactory){

  // $scope.products = ProductsFactory.products;
  // console.log($scope.products);
  function getProds(){
    ProductsFactory.index(function(data){
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
    $location.path("/checkout/" + id);
  }


})

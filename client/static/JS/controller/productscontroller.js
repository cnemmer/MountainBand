myApp.controller("ProductsController", function($scope, AdminProductFactory, $location, CheckoutFactory){

  function getProds(){
    AdminProductFactory.index(function(data){
      $scope.products = data;
    })
  }
  getProds();

 })

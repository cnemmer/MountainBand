myApp.controller("ProductsController", function($scope, AdminProductFactory, $location, CheckoutFactory, $uiModal, $log){

  function getProds(){
    AdminProductFactory.index(function(data){
      $scope.products = data;
    })
  }
  getProds();

  $scope.open = function(size){
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
  }
 })

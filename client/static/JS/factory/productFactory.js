myApp.factory("ProductsFactory", function($http){
  var factory = {};
  factory.products = {};

  factory.index = function(callback){
    $http.get("/products").success(callback); 
  }

  factory.create = function(newProduct, callback){
    $http.post("/addProduct", newProduct).success(function(data){
      factory.products = data;
      callback(data);
    });
  }

  return factory;

})

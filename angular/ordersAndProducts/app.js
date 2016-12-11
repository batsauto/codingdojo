var myAppModule = angular.module("myApp", []);

myAppModule.factory('productFactory', ['$http',function (){

  var products = [
    {name:'Keyboard', price: 149.99, quantity: 22},
    {name:'Mouse', price: 59.99, quantity: 73},
    {name:'Basketball', price: 21.99, quantity: 18}
  ];

  var factory = {};

  factory.index = function(callback){
    callback(products);
  }

  factory.getProducts = function (callback){
    callback(products);
  }

  factory.addProduct = function(product, callback){
    if(product.price && Number(parseFloat(product.price))==product.price){
      product.quantity = 50;
      products.push(product);
      callback(products);
    }
  };

  factory.deleteProduct = function($index, callback){
    products.splice($index, 1);
    callback(products);
  };

  factory.buyProduct = function(data, callback) {
      if (Number.isInteger(data.quantity)) {
      if (products[data.id].quantity - data.quantity > 0) {
        products[data.id].quantity -= data.quantity;
      } else {
        products[data.id].quantity = 0;
      }
    }
    callback(products);
  }

  return factory;
}]);


myAppModule.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
  $scope.product = {};
  $scope.products = {};

  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }

  $scope.index = function(){
    productFactory.index(setProducts);
  }

  $scope.index();

  $scope.addProduct = function(){
    productFactory.addProduct($scope.product, setProducts);
  }

  $scope.deleteProduct = function(id){
    productFactory.deleteProduct(id, setProducts);
  }
}]);


myAppModule.controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory) {
  $scope.product = {};
  $scope.products = [];

  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
  
  $scope.index = function(){
    productFactory.index(setProducts);
  }

  $scope.index();



  productFactory.index(setProducts);
        $scope.buyProduct = function(id) {
            productFactory.buyProduct({
                id: id,
                quantity: 1
            }, setProducts);
        }
}]);

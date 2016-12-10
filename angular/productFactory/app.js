var myAppModule = angular.module("myApp", []);

myAppModule.factory('productFactory', ['$http',function (){

  var products = [
    {name:'Keyboard', price: 149.99},
    {name:'Mouse', price: 59.99},
    {name:'Basketball', price: 21.99}
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
      products.push(product);
      callback(products);
    }
  };
  factory.deleteProduct = function($index, callback){
    products.splice($index, 1);
    callback(products);
  };
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
  $scope.deleteProduct = function($index){
    productFactory.deleteProduct($index, setProducts);
  }
}]);

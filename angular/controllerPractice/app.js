var myAppModule = angular.module('myApp', []);

myAppModule.controller('productsController', function($scope){
  $scope.foods = [
              // {name: 'Pizza'},
              // {name: 'Salad'},
              // {name: 'Chicken'},
              // {name: 'Sandwhich'}
        ];
  $scope.addFood = function(){
    $scope.foods.push($scope.newFood);
    $scope.newFood = {};
  };
});

var myAppModule = angular.module("myApp", []);

myAppModule.controller('usersController', function($scope) {
  $scope.users = [
    {first: 'Christian', last: 'Barrow', language: 'Javascript'},
    {first: 'Marc', last: 'Barrow', language: 'Java'},
    {first: 'Sterling', last: 'Barrow', language: 'Python'},
    {first: 'Parker', last: 'Barrow', language: 'C#'},
    {first: 'Gene', last: 'Barrow', language: 'Ruby'}
  ];
  $scope.addUser = function(){
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
  };
  $scope.deleteUser = function($index){
    $scope.users.splice($index, 1);
  };
});

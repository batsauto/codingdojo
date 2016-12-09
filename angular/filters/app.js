var myAppModule = angular.module('myApp', []);

myAppModule.controller('colorController', ['$scope', '$http', function($scope, $http) {
      $http.get('crayola.json').success(function(data) {
            $scope.colors = data; // get data from json
            });
      }
  ]);

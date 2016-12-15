myAppModule.controller("playersController", function($scope, playerFactory) {
  $scope.players = [];

  playerFactory.getPlayers(function(players) {
    $scope.players = players;
  })

  $scope.addPlayer = function(callback) {
    playerFactory.addPlayer($scope.newPlayer);
    callback($scope.newPlayer);
    $scope.newPlayer = {};
  }

  $scope.removePlayer = function($index) {
    playerFactory.removePlayer($index);
  }
})

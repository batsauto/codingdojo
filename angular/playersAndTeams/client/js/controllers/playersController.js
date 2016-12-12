myAppModule.controller("playersController", function($scope, playerFactory) {
  $scope.players = [];

  playerFactory.getPlayers(function(players) {
    $scope.players = players;
  })

  $scope.addPlayer = function() {
    playerFactory.addPlayer($scope.newPlayer)
    $scope.newPlayer = {};
  }

  $scope.removePlayer = function($index) {
    playerFactory.removePlayer($index);
  }
})

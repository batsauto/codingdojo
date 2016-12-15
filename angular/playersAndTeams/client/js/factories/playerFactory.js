myAppModule.factory("playerFactory", function() {
  var players = [
    {name:"Speros", team:"Seahawks"},
    {name:"Jimmy", team:""},
    {name:"Jay", team:""},
    {name:"Kris", team:"49ers"}
  ];

  var factory = {};

  factory.getPlayers = function(callback) {
    callback(players);
};

  factory.addPlayer = function(newPlayer) {
    newPlayer.team = "";
    players.push(newPlayer);

};

  factory.removePlayer = function($index) {
    players.splice($index, 1);
};

  factory.addPlayerToTeam = function(data) {
    players[data.playerIdx].team = data.team;
};

  factory.removePlayerFromTeam = function($index) {
    players[$index].team = "";
};
  return factory;
});

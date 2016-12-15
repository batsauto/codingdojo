myAppModule.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider
      .when('/players', {
        templateUrl: 'static/partials/players.html',
        controller: 'playersController'
      })
      .when('/teams', {
        templateUrl: '/static/partials/teams.html',
        controller: 'teamsController'
      })
      .when('/associations', {
        templateUrl: '/static/partials/associations.html',
        controller: 'associationsController'
      })
      .otherwise({
        redirectTo: '/'
      })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);

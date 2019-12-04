angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.notification',
  'myApp.dispFactory'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


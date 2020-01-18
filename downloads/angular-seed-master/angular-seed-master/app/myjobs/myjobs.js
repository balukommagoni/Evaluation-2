'use strict';
angular.module('monitoringApp.myjobs', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myjobs', {
    templateUrl: 'myjobs/myjobs.html',
    controller: 'myjobsController'
  });
}])
.controller('myjobsController', ['$scope',function($scope) {
  
}]);
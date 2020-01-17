'use strict';
angular.module('myApp.myjobs', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myjobs', {
    templateUrl: 'myjobs/myjobs.html',
    controller: 'myjobsCtrl'
  });
}])
.controller('myjobsCtrl', ['$scope',function() {
  $scope.dashletlabels=[
    'due today',
    'sme',
    'uncategorized',
    'completed today',
    'due today',
    'sme',
    'uncategorized',
    'completed today',
    'due today',
    'sme',
    'uncategorized',
    'completed today'
    ];
}]);
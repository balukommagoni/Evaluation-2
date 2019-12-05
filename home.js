'use strict';
angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl', ['$scope','dispFactory',function($scope,dispFactory) {
  dispFactory.getdata().then(function (data) {
    $scope.CompleteData=data.data;
})
}]);


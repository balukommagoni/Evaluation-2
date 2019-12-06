'use strict';
angular.module('myApp.notification', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notification', {
    templateUrl: 'notification/notification.html',
    controller: 'notificationCtrl'
  });
}])
.controller('notificationCtrl', ['$scope','dispFactory',function($scope,dispFactory) {
  dispFactory.getdata().then(function (data) {
    $scope.CompleteInfo=data.data;
});
    $scope.Remove=function(){
      var ele=angular.element(document.querySelector('.card0'));
      ele.remove();
    }
}]);
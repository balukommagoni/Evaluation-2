'use strict';
angular.module('myApp.notification', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notification', {
    templateUrl: 'notification/notification.html',
    controller: 'notificationCtrl'
  });
}])
.controller('notificationCtrl', ['$scope','dispFactory',function($scope,dispFactory) {
  dispFactory.getnotifdata().then(function (data) {
    $scope.CompleteInfo=data.data;

    $scope.Remove=function(index1,index2,index3){
      console.log(index1,index2,index3);
    }
});
}])
.directive(directive5,function(){

});

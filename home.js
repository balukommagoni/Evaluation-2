'use strict';
angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}]).controller('homeCtrl', ['$scope','dispFactory',function($scope,dispFactory) {
  dispFactory.getuserdata().then(function (data) {
    $scope.CompleteData=data.data;
})
}])
.directive(directive1,function(){

})
.directive(directive2,function(){

})
.directive(directive3,function(){

})
.directive(directive4,function(){

});


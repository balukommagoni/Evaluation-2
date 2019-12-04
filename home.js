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
    $scope.title1= data.data[0].postTitle;
    $scope.title2= data.data[1].postTitle;
    $scope.title3= data.data[2].postTitle;
    $scope.description1=data.data[0].postDescription;
    $scope.description2=data.data[1].postDescription;
    $scope.description3=data.data[2].postDescription;
    $scope.noOfLikes1=data.data[0].postLikes;
    $scope.noOfLikes2=data.data[1].postLikes;
    $scope.noOfLikes3=data.data[2].postLikes;
    $scope.commentId1=data.data[0].postComments[0].postCommentId;
    $scope.commentId2=data.data[0].postComments[1].postCommentId;
    $scope.commentId3=data.data[0].postComments[2].postCommentId;
    $scope.commentAuthor1=data.data[0].postComments[0].postCommentAuthor;
    $scope.commentAuthor2=data.data[0].postComments[1].postCommentAuthor;
    $scope.commentAuthor3=data.data[0].postComments[2].postCommentAuthor;
    $scope.commentDescription1=data.data[0].postComments[0].postCommentDescription;
    $scope.commentDescription2=data.data[0].postComments[1].postCommentDescription;
    $scope.commentDescription3=data.data[0].postComments[2].postCommentDescription;
})
}]);


'use strict';
angular.module('myApp.home', ['ngRoute','ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: './home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl',['$scope',function($scope) {
  $scope.label1='sme';
  $scope.label2='uncategorized';
  $scope.label3='completed today';
  $scope.label4='due today';
  
  $scope.checkboxValue1='Open';
  $scope.checkboxValue2='Query';
  $scope.checkboxValue3='Completed';

  $scope.gridData = [
    {requestID: '702', taskID: '454', branch: 'ATL', emailSubject: 'New Request Creation', transactionType:'PR',recievedOn:'09/27/19 05:22:52',loadingDate:'12/24/19 04:32:50',dueDate:'12/25/19 55:26:53',taskSubStatus:'Sorting-Assigned',assignedTo:'stgtestuser11'},
    {requestID: '703', taskID: '244', branch: 'BOS', emailSubject: 'Test', transactionType:'-',recievedOn:'09/29/19 03:21:02',loadingDate:'05/25/19 01:12:51',dueDate:'02/24/19 03:32:22',taskSubStatus:'Sorting-UnAssigned',assignedTo:'-'},
    {requestID: '749', taskID: '678', branch: 'BOI', emailSubject: 'New Request Creation', transactionType:'-',recievedOn:'08/26/19 09:14:51',loadingDate:'03/14/19 25:42:52',dueDate:'04/25/19 42:22:25',taskSubStatus:'SME_Assigned',assignedTo:'stgtestuser11'},
    {requestID: '756', taskID: '244', branch: 'MET', emailSubject: 'Test', transactionType:'PR',recievedOn:'05/16/19 05:23:52',loadingDate:'05/22/19 15:22:53',dueDate:'04/25/19 25:34:52',taskSubStatus:'SME-UnAssigned',assignedTo:'-'},
    {requestID: '732', taskID: '765', branch: 'FTL', emailSubject: 'Test', transactionType:'-',recievedOn:'06/25/19 06:24:54',loadingDate:'05/23/19 05:32:51',dueDate:'03/24/19 45:24:55',taskSubStatus:'Sorting-UnAssigned',assignedTo:'stgtestuser11'},
    {requestID: '778', taskID: '864', branch: 'FLO', emailSubject: 'New Request Creation', transactionType:'-',recievedOn:'01/16/19 03:22:52',loadingDate:'03/14/19 22:42:51',dueDate:'04/25/19 42:34:56',taskSubStatus:'SME_Assigned',assignedTo:'-'}
  ];

    $scope.currentPage = 1;
    $scope.itemsPerPage = 2;
    $scope.maxSize = 2;
    $scope.totalItems = 6;

  var expanded = false;
  $scope.showCheckboxes = function(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }

  $scope.search=function(){
    
  }
  $scope.reset=function(){
    
  }
}]).directive('directive1',function(){
  return{
    scope:{
      label1:'=',
      label2:'=',
      label3:'=',
      label4:'='
      }, 
      restrict:'E',
  }
}).directive('directive2',function(){
  return{
    scope:{
      checkboxValue1:'=',
      checkboxValue2:'=',
      checkboxValue3:'=',
      }, 
      restrict:'E',
  }
}).directive('directive3',function(){
  return{
    scope: {
      Data: '=select'
  }, 
      restrict:'E',
  }
});
  



































 // var labelValue=$scope.label1;
      // dispFactory.setProperty(labelValue);
      // $scope.images=[{image:"/images/img1.jpg"},{image:'/images/img2.jpg'},{image:"/images/img3.jpg"},{image:"/images/img4.jpg"},{image:"/images/images4.jpg"},{image:"/images/images1.jpg"},{image:"/images/images2.jpg"},{image:"/images/images3.jpg"},{image:"/images/download.jpg"},{image:"/images/download1.jpg"},{image:"/images/download2.jpg"},{image:"/images/download3.jpg"},{image:"/images/tshirts.png"}]
      // var checkedUsers = [];
      
      // $scope.cart = function(){
      //   var selectedItem=dispFactory.GetData();
        
      //   $scope.images.forEach(function(img) 
      //   {
      //     if(selectedItem.length>0 && img.selected)
      //     {
      //       for(var i=0;i<selectedItem.length;i++)
      //       {
      //         if(selectedItem[i].image == img.image)
      //         {
      //           selectedItem.splice(i,1);
      //         }
      //       }
      //       checkedUsers.push(img);
      //     }
      //     else
      //     {
      //       if(img.selected)
      //       {
      //         checkedUsers.push(img);
      //       }
      //     }
      //     img.selected=false;
      //   });
      //   dispFactory.SetData(checkedUsers);
      //   $location.path('/cart'); 
      // }
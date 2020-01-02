'use strict';
angular.module('myApp.home', ['ngRoute'])
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
});
  


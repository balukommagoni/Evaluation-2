var app=angular.module('myApp.dispFactory',[]);
app.factory('dispFactory', ['$http', function($http) {
    var dataFactory = {};
     dataFactory.getdata = function () {
               return $http.get(' http://demo1124924.mockable.io/getuserdetails');
         };
     return dataFactory;
 }]);


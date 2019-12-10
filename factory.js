var app=angular.module('myApp.dispFactory',[]);
app.factory('dispFactory', ['$http', function($http) {
    var dataFactory = {};
     dataFactory.getuserdata = function () {
               return $http.get('http://demo1124924.mockable.io/getuserdetails').then(
                function Success (response) {
                    console.info('Resolved');
                    return response;
                },
                function Failure (response) {
                    console.error('Rejected');
                    return response;
                }
            );
         };
         dataFactory.getnotifdata = function () {
            return $http({method: 'POST',  
            url: "http://demo1124924.mockable.io/getNotifications",  
            headers: { 'Ukey': 12 }
        }).then(
            function Success (response) {
                console.info('Resolved');
                return response;
            },
            function Failure (response) {
                console.error('Rejected');
                return response;
            }
        );
      };
     return dataFactory;
 }]);


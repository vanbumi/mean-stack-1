
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', function ($scope, $http) {
  console.log("Hello from controller");

  $http.get('/contactlist').success(function(response) {
      console.log("I got the data I requested");
      $scope.contactlist = response;
  });
});
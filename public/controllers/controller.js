// function AppCtrl() {
// 	console.log("Hello world from controller")
// }

// <---- sample --->
// var myApp = angular.module('myApp',[]);

// myApp.controller('meetupsController', ['$scope', function($scope) {
//   $scope.meetupsCount = 10;
// }]);

// <---- this is the correct one to write controller ---->
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', function ($scope) {
  console.log("Hello from controller");

  person1 = {
  	name: "Tim",
  	email: "tim@email.com",
  	number: "111-1111-111"
  };

  person2 = {
  	name: "Emily",
  	email: "emily@email.com",
  	number: "222-2222-222"
  };

  person3 = {
  	name: "Tamy",
  	email: "tamy@email.com",
  	number: "333-3333-333"
  };

  var contactlist = [person1, person2, person3]
  $scope.contactlist = contactlist;

});
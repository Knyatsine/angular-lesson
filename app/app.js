var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',["$scope",function($scope){

$scope.message = "hey all";

$scope.ninjas = ["yoshi","crystal","ryu","shaun"];

}]);

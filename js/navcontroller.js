"use strict";

var myPort = angular.module("myPort");

myPort.controller("navController",["$scope", "$location", function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);

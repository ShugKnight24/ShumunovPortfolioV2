var myPort = angular.module("myPort", []);

myPort.directive("post", function(){
  return {
      restrict: "AE",
      templateUrl: "templates/projects.html",
      replace: false
  };
});

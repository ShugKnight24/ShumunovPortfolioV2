//Created my module. Passed through the angular routing module
var myPort = angular.module("myPort", ["ngRoute"]);

//Routing for my app
myPort.config(function($routeProvider){
    $routeProvider.when("/",
    {
      controller: "portController",
      templateUrl: "views/home.html"
    })
    .when("/home", {
      controller: "portController",
      templateUrl: "views/home.html"
    })
    .when("/about", {
      controller: "portController",
      templateUrl: "views/about.html"
    })
    .when("/contact", {
      controller: "portController",
      templateUrl: "views/contact.html"
    })
    .when("/portfolio", {
      controller: "portController",
      templateUrl: "views/portfolio.html"
    })
    .when("/404", {
      controller: "portController",
      templateUrl: "views/404.html"
    })
    .otherwise({ redirectTo: "/404" });
});
//Created my directive to post a repeating project template
myPort.directive("project", function(){
  return {
      restrict: "AE",
      templateUrl: "templates/projects.html",
      replace: false
  };
});

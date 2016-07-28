var myPort = angular.module("myPort");

myPort.controller("portController", ["$scope", function($scope){
  $scope.projects = [
    {
      title:"Project 1",
      image: {
        path: "#",
        alt: "Project Description"
      },
      description:"Project Description"
    },
    {
      title:"Project 2",
      image: {
        path: "#",
        alt: "Project 2 Description"
      },
      description:"Project 2 Description"
    },
    {
      title:"Project 3",
      image: {
        path: "#",
        alt: "Project 3 Description"
      },
      description:"Project 3 Description"
    },
    {
      title:"Project 4",
      image: {
        path: "#",
        alt: "Project 4 Description"
      },
      description:"Project 4 Description"
    },
    {
      title:"Project 5",
      image: {
        path: "#",
        alt: "Project 5 Description"
      },
      description:"Project 5 Description"
    },
    {
      title:"Project 6",
      image: {
        path: "#",
        alt: "Project 6 Description"
      },
      description:"Project 6 Description"
    },
    {
      title:"Project 7",
      image: {
        path: "#",
        alt: "Project 7 Description"
      },
      description:"Project 7 Description"
    },
    {
      title:"Project 8",
      image: {
        path: "#",
        alt: "Project 8 Description"
      },
      description:"Project 8 Description"
    },
    {
      title:"Project 9",
      image: {
        path: "#",
        alt: "Project 9 Description"
      },
      description:"Project 9 Description"
    }
  ];
}]);

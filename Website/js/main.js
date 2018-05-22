var myapp = angular.module('myapp', ['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home',{
      templateUrl: 'Views/Home.html',
      controller:'MainController'
    })
    .when('/other', {
      templateUrl: 'views/otherpage.html',
      controller:'MainController'
    })
    .otherwise({
      redirectTo:'/home'
    })
}]);


myapp.controller('MainController', ['$scope',function($scope){

}]);

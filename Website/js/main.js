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
    .when('/questions', {
      templateUrl: 'views/questions.html',
      controller:'MainController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller:'MainController'
    })
    .otherwise({
      redirectTo:'/login'
    })
}]);


myapp.controller('MainController', ['$scope',function($scope){

}]);

$scope.Testing = function()
{
  alert("I am an alert box!");
}

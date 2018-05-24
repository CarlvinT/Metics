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
    .when('/graphing', {
      templateUrl: 'views/graphing.html',
      controller:'MainController'
    })
    .otherwise({
      redirectTo:'/home'
    })
}]);


myapp.controller('MainController', ['$scope',function($scope){
  let myChart = document.getElementById('myChart').getContext('2d');

  let massPopChart = new Chart(myChart,{
    type:'bar',
    data:{
      labels:['Hoofdpijn','SpierPijn','Lorem','Lorem','Lorem'],
      datasets:[{
        label:'Symptomen',
        data:[200,400,500,100,800],
        backgroundColor:['rgba(255,99,132,0.6)','rgba(0,99,132,0.6)','rgba(255,0,132,0.6)','rgba(255,99,0,0.6)','rgba(255,255,132,0.6)'],
        borderWidth:1,
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:'Aantal Klachten per symptoom',
      },
      legend:{
        display:false
      }

    }
  });


/*$scope.Testing = function()
  {
    alert("I am an alert box!");
  }
  $scope.Testing();*/

}]);

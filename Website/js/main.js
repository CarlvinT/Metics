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
    .when('/graph', {
      templateUrl: 'views/graphing.html',
      controller:'MainController'
    })
    .otherwise({
      redirectTo:'/home'
    })
}]);


myapp.controller('MainController', ['$scope',function($scope){

  // Charting code
  let myChart = document.getElementById('myChart').getContext('2d');
  let massPopChart = new Chart(myChart,{
    type:'bar',
    data:{
      labels:['Hoofdpijn','SpierPijn','Lorem','Lorem','Lorem'],
      datasets:[{
        label:'Symptomen',
        data:[Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,175,0],// zorgt voor errors maar zorgt dat 0 de kleinste waarde is
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

// geolocation
  $scope.getGeolocation = function()
  {
    navigator.geolocation.getCurrentPosition(function(location) {
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      console.log(location.coords.accuracy);
    });
  }


  if ("geolocation" in navigator) {
    console.log("working");
    $scope.getGeolocation();
  } else {
    console.log("gg")
  }


/*$scope.Testing = function()
  {
    alert("I am an alert box!");
  }
  $scope.Testing();*/

}]);

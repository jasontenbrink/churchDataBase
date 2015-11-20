var app = angular.module('app',['ngAnimate','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/directory', {
                  templateUrl: 'assets/views/routes/directory.html',
                  controller: "DirectoryController"
                })
                .when('/home', {
                  templateUrl: 'assets/views/routes/home.html',
                  controller: 'HomeController'
                });
}]);


//'ngRoute', 'ngAnimate'
var app = angular.module('app',['ngAnimate','ngRoute', 'ui.grid', 'ui.grid.selection','ngMaterial', 'ui.grid.exporter']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/directory', {
                  templateUrl: 'assets/views/routes/directory.html',
                  controller: "DirectoryController"
                })
                .when('/home', {
                  templateUrl: 'assets/views/routes/home.html',
                  controller: 'HomeController'
                })
                .when('/individualDatacard', {
                  templateUrl:'assets/views/routes/individual-datacard.html',
                  controller: 'IndividualDatacardController'
                })
                .when('/family', {
                  templateUrl:'assets/views/routes/family.html',
                  controller: 'FamilyDatacardController'
                })
                .when('/make-families', {
                  templateUrl:'assets/views/routes/make-families.html',
                  controller: 'MakeFamiliesController'
                })
                .when('/edit-family', {
                  templateUrl:'assets/views/routes/edit-family.html',
                  controller: 'EditFamilyController'
                });
}]);


//'ngRoute', 'ngAnimate'

app.controller('DirectoryController',['$scope', 'DataService', function ($scope, DataService) {
  $scope.searchString = '';
  $scope.dataService = DataService;


  console.log('hi, for DirectoryController', $scope.searchResults);
  $scope.getQuery = function () {
        console.log($scope.searchString);
        if ($scope.dataService.peopleData() === undefined){
          $scope.dataService.retrieveData($scope.searchString);
        }
        
        $scope.searchResults = $scope.dataService.peopleData();

    };



}]);

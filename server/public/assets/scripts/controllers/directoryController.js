app.controller('DirectoryController',['$scope', 'DataService', function ($scope, DataService) {
  $scope.searchObject = {};
  $scope.searchResults = [];
  $scope.dataService = DataService;


  console.log('hi, for DirectoryController', $scope.searchResults);
  $scope.getQuery = function () {
        console.log('heading out from controller', $scope.searchObject);
        if ($scope.dataService.peopleData() === undefined){
          $scope.dataService.retrieveData($scope.searchObject)
          .then(function () {
            $scope.searchResults = $scope.dataService.peopleData();
          });
        }
        else{
          $scope.searchResults = $scope.dataService.peopleData();
        }

    };



}]);

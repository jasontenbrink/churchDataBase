app.controller('DirectoryController',['$scope', 'DataService', function ($scope, DataService) {
  $scope.searchString = '';
  $scope.dataService = DataService;
  $scope.searchResults = [{last_name: 'Tenbrink'},{last_name: 'Aron'}];
  if ($scope.dataService.peopleData() === undefined){
    $scope.dataService.retrieveData();
  }
  else{
    $scope.searchResults = $scope.dataService.peopleData();
  }
  console.log('hi, for DirectoryController');
  // $scope.getQuery = function () {
  //   console.log($scope.searchString);
  //   $http.get('/data', $scope.searchString).then(function (response) {
  //       $scope.searchResults = response.data;
  //   });
  // };


}]);

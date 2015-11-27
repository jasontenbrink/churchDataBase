app.controller('IndividualDatacardController', ['$scope', 'DataService',
function ($scope, DataService) {
  $scope.x = 'hi!';
  var dataService = DataService;
  dataService.retrieveFamilyData()
  .then(function () {
      $scope.family = dataService.familyData();
    });



}]);

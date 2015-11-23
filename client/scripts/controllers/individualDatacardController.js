app.controller('IndividualDatacardController', ['$scope', 'DataService',
function ($scope, DataService) {
  $scope.x = 'hi!';
  var dataService = DataService;
  $scope.member = dataService.retrieveActiveMember();
  $scope.y = dataService.retrieveActiveMemberId();


}]);

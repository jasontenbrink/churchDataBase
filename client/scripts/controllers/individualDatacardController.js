app.controller('IndividualDatacardController', ['$scope', 'DataService',
function ($scope, DataService) {
  $scope.x = 'hi!';
  var dataService = DataService;
  var data;
  dataService.retrieveActiveMember()
  .then(function () {
      data =  dataService.memberData();
      $scope.member = dataService.memberData().individual;
      $scope.addresses = dataService.memberData().addresses;
      $scope.families = dataService.memberData().families;
      console.log('from inside indvcontr',data);
    });



}]);
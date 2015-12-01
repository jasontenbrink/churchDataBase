app.controller('DirectoryController',['$scope', 'DataService', 'uiGridConstants','$timeout',
function ($scope, DataService, uiGridConstants, $timeout) {

  $scope.searchObject = new SearchObject();
  $scope.searchResults = [];
  $scope.family = [];
  var dataService = DataService;

  $scope.sendSelectedMemberInfo = function(id) {
    console.log('this is the grid id', id);
    dataService.assignActiveMemberId(id);
  };

  $scope.gridOptions = {
    columnDefs: [
           { field: 'first_name',
             cellTemplate: '<a ng-click="grid.appScope.sendSelectedMemberInfo(row.entity.pin)" ' +
             'href="#/individualDatacard">{{COL_FIELD}}</a>',
             sort: {
               direction: uiGridConstants.ASC,
               priority: 1
             }
           },
           { field: 'last_name',
              sort: {direction: uiGridConstants.ASC, priority: 2}},
           { field: 'email'},
           { field: 'phone'},
           {field: 'pin', visible: false}
         ],
    enableFullRowSelection: true
  };

  $scope.gridOptions.onRegisterApi = function(gridApi){
  //set gridApi on scope
  $scope.gridApi = gridApi;
  gridApi.selection.on.rowSelectionChanged($scope,function(row){
      var msg = 'row selected ' + row.isSelected;
      console.log(row.entity);
      console.log(msg);
    });
  };
  $scope.getQuery = function () {
        console.log('heading out from controller', $scope.searchObject);
      //  if (dataService.peopleData() === undefined){
          dataService.retrieveData($scope.searchObject)
          .then(function () {
            $scope.searchResults = dataService.peopleData();
            $scope.gridOptions.data = $scope.searchResults;
          });
      //  }
        // else{
        //   $scope.searchResults = dataService.peopleData();
        // }
    };

    $timeout(function () {
       angular.element(document).find('nav').triggerHandler('click');
    }, 0);
}]);

function SearchObject() {
  this.first_name='';
  this.last_name='';
  this.email='';
  this.phone='';
}

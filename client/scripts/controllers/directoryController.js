app.controller('DirectoryController',['$scope', 'DataService', 'uiGridConstants',
function ($scope, DataService, uiGridConstants) {

  $scope.searchObject = new SearchObject();
  $scope.searchResults = [];
  $scope.dataService = DataService;

  $scope.sayHi = function() {
    //for actually functionality of the clicked link I'll need to use an http.get
    //and send of the info of the person that is clicked.  the server will go to the DB
    //and get any other info that is needed (maybe a join ?) and send it all back down
    //in the DB call back.  Another option is to have a individual member factory that
    //holds a bunch of info for an active user... then clicking on the persons name will send
    //them to the datacard page.  The dc page will have to have logic to go to the factory and get the info.
    //Another option is to have a massive query that pulls down a ton of info and store that in one factory
    // each page can then pull info from that factory as needed.  That would essentially be an entire DB dump
    //into a factory.  I should ask Scott and Kris about which approach to take.

    alert('Not Ready yet!');
  };
  $scope.gridOptions = {
    //data: $scope.searchResults
    columnDefs: [
           { field: 'first_name',
             cellTemplate: '<a ng-click="grid.appScope.sayHi()" href="">{{COL_FIELD}}</a>',
             sort: {
               direction: uiGridConstants.ASC,
               //priority: 1
             }
           },
           { field: 'last_name'},
           { field: 'email'},
           { field: 'phone'},


         ]
  };


  console.log('hi, for DirectoryController', $scope.searchResults);
  $scope.getQuery = function () {
        console.log('heading out from controller', $scope.searchObject);
      //  if ($scope.dataService.peopleData() === undefined){
          $scope.dataService.retrieveData($scope.searchObject)
          .then(function () {
            $scope.searchResults = $scope.dataService.peopleData();
            $scope.gridOptions.data = $scope.searchResults;
          });
      //  }
        // else{
        //   $scope.searchResults = $scope.dataService.peopleData();
        // }

    };
}]);

function SearchObject() {
  this.first_name='';
  this.last_name='';
  this.email='';
  this.phone='';
}

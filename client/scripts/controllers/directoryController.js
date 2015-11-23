app.controller('DirectoryController',['$scope', 'DataService', 'uiGridConstants',
function ($scope, DataService, uiGridConstants) {

  $scope.searchObject = new SearchObject();
  $scope.searchResults = [];
  $scope.dataService = DataService;

  $scope.sendSelectedMemberInfo = function(gridId) {
    console.log('this is the grid id', gridId);
    for (var i = 0; i < $scope.searchResults.length; i++) {
      console.log('this is the searchResults hashkey', $scope.searchResults[i].$$hashKey);
      if ($scope.searchResults[i].$$hashKey === gridId){
          $scope.dataService.assignActiveMemberId($scope.searchResults[i].$$hashKey);
          break;
      }
    }
    //for actually functionality of the clicked link I'll need to use an http.get
    //and send of the info of the person that is clicked.  the server will go to the DB
    //and get any other info that is needed (maybe a join ?) and send it all back down
    //in the DB call back.  Another option is to have an individual member factory that
    //holds a bunch of info for an active user... then clicking on the persons name will send
    //them to the datacard page.  The dc page will have to have logic to go to the factory and get the info.
    //Another option is to have a massive query that pulls down a ton of info and store that in one factory
    // each page can then pull info from that factory as needed.  That would essentially be an entire DB dump
    //into a factory.  I should ask Scott and Kris about which approach to take.

    //update
    //Settling on a big call at the beginning if any parameters are entered in the search,
    //If no parameters are entered will only call data needed to populate results table (will
    // add this last bit at a later time.  DBs should be small enough that first way should
    //work fine).
    //will have to add calls to factory to get all the data for an individual
    //(all personal info plus all families info needed for individual data card) plus
    //add a call or calls to factory to get all info needed for for family card.
    //may want to build second factory to handle cases where only part of the data is brought down.
    //Try to make the controller not know where it's getting it's data.

  };
  $scope.gridOptions = {
    //data: $scope.searchResults
    columnDefs: [
           { field: 'first_name',
             cellTemplate: '<a ng-click="grid.appScope.sendSelectedMemberInfo(row.entity.$$hashKey)" href="#/individualDatacard">{{COL_FIELD}}</a>',
             sort: {
               direction: uiGridConstants.ASC,
               //priority: 1
             }
           },
           { field: 'last_name'},
           { field: 'email'},
           { field: 'phone'},
           {field: '$$hashKey', visible: false}


         ]
  };


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

app.factory('DataService', ['$http', function ($http) {
  var data;
  var activeMemberId = -1;
  var activeFamilyId = -1;

  var getMember = function (id) {
    var member;
    for (var i = 0; i < data.length; i++) {
      if (data[i].$$hashKey === id){
        member = data[i];
        console.log('active memberId from factory', activeMemberId);
        return member;
      }
    }
  };

  var setActiveMemberId = function (id) {
    activeMemberId = id;
  };

  var setActiveFamilyId =function (id) {
    activeFamilyId = id;
  };

  var getData = function (queryParams) {
    console.log('heading out from factory', queryParams);
    var promise = $http.get('/data',
      {params: queryParams}
    )
    .then(
      function (response) {
        console.log('response from server', response.data);
        data = response.data;
      }
    );
    return promise;
  };

  var publicApi = {
    retrieveData: function (queryParams) {
      return getData(queryParams);
    },
    peopleData: function () {
      return data;
    },
    setActiveFamilyIdApi: function (id) {
      return setActiveFamilyId(id);
    },
    assignActiveMemberId: function (id) {
      return setActiveMemberId(id);
    },
    retrieveActiveMemberId: function () {
      return activeMemberId;
    },
    retrieveActiveMember: function (id) {
      return getMember(activeMemberId);
    },
    // retrieveMemberName: function () {
    //   return activeMember.first_name;
    // }
  };
  return publicApi;
}]);

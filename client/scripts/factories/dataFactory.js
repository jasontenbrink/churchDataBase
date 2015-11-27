app.factory('DataService', ['$http', function ($http) {
  var data;
  var individualData;
  var familyData;
  var activeMemberId = -1;
  var activeFamilyId = -1;

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
      return getIndividualData(activeMemberId);
    },
    memberData: function () {
      return individualData;
    },
    retrieveFamilyData: function (idea) {
      return getFamilyData(activeFamilyId);
    },
    familyData: function () {
      return familyData;
    }
  };

//getters
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

  var getIndividualData = function (id) {
    var member = getMember(id);
    console.log('heading out from factory on /data/individual: ', member);
    var promise = $http.get('/data/individual',
      {params: member}
    )
    .then(
      function (response) {
        console.log('response from server', response.data);
        individualData = response.data;
      }
    );
    return promise;
  };

  var getFamilyData = function (id) {
    console.log('heading out from factory on /data/family: ', id);
    var promise = $http.get('/data/family',
      {params: {familyId: id}}
    )
    .then(
      function (response) {
        console.log('response from server', response.data);
        familyData = response.data;
      }
    );
    return promise;
  };

//setters
  var setActiveMemberId = function (id) {
    activeMemberId = id;
  };

  var setActiveFamilyId =function (id) {
    activeFamilyId = id;
  };

//utility
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

  return publicApi;
}]);

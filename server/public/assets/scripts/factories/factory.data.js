app.factory('DataService', ['$http', function ($http) {
  var data;
  var getData = function (queryParams) {
    console.log('heading out from factory', queryParams);
    var promise = $http.get('/data',
      {params: queryParams}
    )
    .then(
      function (response) {
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
    }
  };
  return publicApi;
}]);

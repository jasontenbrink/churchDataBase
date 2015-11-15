app.factory('DataService', ['$http', function () {
  var data;
  var getData = function (queryParams) {
    $http.get('/data'
      //{params: {last_name: queryParams.last_name}}
    )
    .then(
      function (response) {
        data = response.data;
      }
    );
  };

  var publicApi = {
    retrieveData: function (queryParams) {
      getData(queryParams);
    },
    peopleData: function () {
      return data;
    }
  };
  return publicApi;
}]);

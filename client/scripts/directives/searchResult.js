app.directive('searchResult',
  function () {
    return {
      restrict: 'E',
      scope: {
        result: '='
      },
      templateUrl: 'assets/views/templates/searchresult.html'
    };
  }
);

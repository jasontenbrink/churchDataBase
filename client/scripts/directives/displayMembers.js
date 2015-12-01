app.directive('displayMember',['uiGridConstants',
  function () {
    return {
      restrict: 'E',
      scope: {
        gridOptions: '=',
        data: '='
      },
      templateUrl: 'assets/views/templates/display-member.html'
    };
  }
]);

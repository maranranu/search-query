var searchApplicationApp = angular.module('searchApplicationApp', []);

(function(app){
  app.controller("searchController", function($scope, $http){
    $scope.searchDoc = function () {
      $http.get("http://localhost:3000/search?query=" + $scope.query)
      .then(function(response) {
        $scope.searchResults = response.data.data;
      });
    }
  });
})(searchApplicationApp);

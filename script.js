'use strict';

angular.module('reddit', ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      templateUrl: 'list.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
.controller('ListCtrl', function($scope){
  $scope.links = [
    { title: 'Google', url: 'http://google.com', description: 'The google thing' },
    { title: 'Yahoo', url: 'http://yahoo.com', description: 'The yahoo thing' }
  ];

  $scope.addLink = function() {
    $scope.links.unshift($scope.link);
    $scope.link = {};
  }
});

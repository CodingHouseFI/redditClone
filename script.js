'use strict';

angular.module('reddit', ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'ListCtrl',
    templateUrl: 'list.html'
  })
  .when('/new', {
    controller: 'NewLinkCtrl',
    templateUrl: 'new.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
.service('linkService', function() {
  this.links = [
    { title: 'Google', url: 'http://google.com', description: 'The google thing' },
    { title: 'Bing', url: 'http://bing.com', description: 'Not a search engine' },
    { title: 'Yahoo', url: 'http://yahoo.com', description: 'The yahoo thing' }
  ];

  this.storeLink = function(newLink) {
    this.links.unshift(newLink);
  }
})
.controller('NewLinkCtrl', function($scope, $location, linkService){
  $scope.newLink = {};
  $scope.addLinkAndRedirect = function() {
    linkService.storeLink($scope.newLink);
    $scope.newLink = {};
    $location.path("/");
  }
})
.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;
});

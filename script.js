'use strict';

var redditApp = angular.module('reddit', ["ngRoute"])
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
  .when('/show/:id', {
    controller: 'showLinkCtrl',
    templateUrl: 'show.html'
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
  };

  this.deleteLink = function(linkIndex) {
    this.links.splice(linkIndex, 1);
  };

  this.readLink = function(index) {
    return this.links[index];
  };
})
.controller('showLinkCtrl', function($scope, linkService, $routeParams){
  $scope.oneLink = linkService.readLink($routeParams.id);
})
.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;

  $scope.deleteLink = linkService.deleteLink;
});

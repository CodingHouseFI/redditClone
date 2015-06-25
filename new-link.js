redditApp.controller('NewLinkCtrl', function($scope, $location, linkService){
  $scope.newLink = {};
  $scope.addLinkAndRedirect = function() {
    linkService.storeLink($scope.newLink);
    $scope.newLink = {};
    $location.path("/");
  }
});

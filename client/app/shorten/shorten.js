angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = Links.link;
    $scope.addLink = Links.addLink;

});

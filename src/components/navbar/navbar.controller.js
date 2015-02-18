'use strict';

angular.module('timeTracker')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });

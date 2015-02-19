/* global Firebase */

'use strict';

angular.module('timeTracker')
  .controller('TimeCtrl', function ($scope, $firebase) {
    $scope.newTime = {};
    var ref = new Firebase('https://sizzling-fire-3558.firebaseio.com/times');
    $scope.times = $firebase(ref).$asArray();

    $scope.saveTime = function(){
      $firebase(ref).$push($scope.newTime);
      $scope.newTime = {};
    };

    $scope.removeTime = function(time) {
      $firebase(ref).$remove(time.$id);
    };
  });

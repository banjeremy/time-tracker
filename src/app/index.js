'use strict';

angular.module('timeTracker', ['ngRoute', 'mm.foundation', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/time/time.html',
        controller: 'TimeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;

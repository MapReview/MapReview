(function () {
'use strict';

  angular
    .module('map', [
      'ngRoute'
    ])
    .config(function(uiGmapGoogleMapApiProvider, $routeProvider) {
          uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyAEx21qDaiRPmhShfVhsUjcz0varjmAvuo',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      })
      $routeProvider
        .when('/', {
          templateUrl: 'views/map.html',
          controller: 'MapController'
        })
        .otherwise({
          redirectTo: '/404'
        });
      })
      $routeProvider
        .when('/', {
          templateUrl: 'views/map.html',
          controller: 'MapController'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
})();

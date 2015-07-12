(function () {
'use strict';

  angular
    .module('map', [
      'ngRoute',
      'angularModalService',
      'ui.bootstrap'
    ])
    .config(function(uiGmapGoogleMapApiProvider, $routeProvider) {
          uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyBjn_JnmB5-anlcP2jenrS702gZQ-ck7y8',
          v: '3.17',
          libraries: 'places,weather,geometry,visualization'
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
})();

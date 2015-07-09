(function() {

  angular
    .module('map', ['uiGmapgoogle-maps'])
    .controller("MapController", function($scope, uiGmapGoogleMapApi, InfoService) {
                  // Do stuff with $scope.
                  angular.extend($scope, {
                      map: {
                          center: {
                              latitude: 42.3349940452867,
                              longitude:-71.0353168884369
                          },
                          zoom: 11,
                          markers: [],
                          events: {
                          click: function (map, eventName, originalEventArgs) {
                              var e = originalEventArgs[0];
                              var lat = e.latLng.lat(),lon = e.latLng.lng();
                              var marker = {
                                  id: Date.now(),
                                  coords: {
                                      latitude: lat,
                                      longitude: lon
                                  },
                                  options: {
                                    animation: api.Animation.DROP,
                                  }
                              };

                              $scope.map.markers.push(marker);
                              console.log($scope.map.markers);
                              $scope.$apply();
                          }
                      }
                      }
                  })

                  var api;
                  uiGmapGoogleMapApi.then(function(googleMaps) {
                  api = googleMaps;
                  });




                  uiGmapGoogleMapApi.then(function(maps) {


                    });

                  });


})();

(function() {

  angular
    .module('map')
    .controller('MapController', function($scope, uiGmapGoogleMapApi) {
                  // Do stuff with $scope.
                  angular.extend($scope, {
                      map: {

                          center: {
                              latitude: 42.3349940452867,
                              longitude:-71.0353168884369
                          },
                          zoom: 11,
                          markers: [],
                          maxZoom: function(map) {
                            var maxZoom = 13;
                            if (map.getZoom() > maxZoom) { map.setZoom(maxZoom) };
                          },
                          events: {
                            dblclick: function (map, eventName, originalEventArgs) {
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
                                $scope.$apply();
                                console.log(map.getZoom());
                                console.log(marker.coords.latitude);
                                return marker.coords.latitude + "";
                            },
                            zoom_changed: function (map, eventName, originalEventArgs) {
                                $scope.map.maxZoom(map)
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

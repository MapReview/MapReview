(function() {

  angular
    .module('map')
    .controller('MapController', function($scope, uiGmapGoogleMapApi) {
                  // Do stuff with $scope.
<<<<<<< HEAD


                      $scope.map = {
=======
                  angular.extend($scope, {
                      map: {

>>>>>>> 40e8cda21ffd5d28ab1181e7a3576aa171eec363
                          center: {
                              latitude: 42.3349940452867,
                              longitude: -71.0353168884369
                          },
                          zoom: 11,
                          showTraffic: true,
                          markers: [],
                          maxZoom: function(map) {
                            var maxZoom = 13;
                            if (map.getZoom() > maxZoom) { map.setZoom(maxZoom) };
                            console.log(map);
                          },
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
                                console.log(map.getZoom());
                            },
                            zoom_changed: function (map, eventName, originalEventArgs) {
                                $scope.map.maxZoom(map)
                            }
                      }
<<<<<<< HEAD
=======
                    }
                  })
>>>>>>> 40e8cda21ffd5d28ab1181e7a3576aa171eec363


                  $scope.windowOptions = {
                  visible: false
                  };
                  $scope.onClick = function() {
                  $scope.windowOptions.visible = !$scope.windowOptions.visible;
                  };
                  $scope.closeClick = function() {
                  $scope.windowOptions.visible = false;
                  };
                  $scope.title = "The Iron Yard!";

                  var events = {
                  places_changed: function (searchBox) {}
                  }
                  $scope.searchbox = {
                    template:'searchbox.tpl.html',
                    events:events
                  };
                  var api;
                  uiGmapGoogleMapApi.then(function(googleMaps) {
                  api = googleMaps;
                  });

                  uiGmapGoogleMapApi.then(function(maps) {

                    });

                  })

<<<<<<< HEAD
                  //***** Custom Map Buttons *****//

                  .controller('controlCtrl', function ($scope) {
                  $scope.controlText = 'Fav1';
                  $scope.danger = false;
                  $scope.controlClick = function () {
                  $scope.danger = !$scope.danger;
                  alert('We can make this do something');
        };
    });
=======
>>>>>>> 40e8cda21ffd5d28ab1181e7a3576aa171eec363
})();

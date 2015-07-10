(function() {

  angular
    .module('map')
    .controller('MapController', function($scope, uiGmapGoogleMapApi, MapService) {
      // Do stuff with $scope.
      $scope.map = {
          center: {
              latitude: 38.8833,
              longitude: -97.0167
          },
          zoom: 4,
          showTraffic: true,
          coords: [],
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

                $scope.map.markers.unshift(marker);
                $scope.$apply();
                console.log($scope.map.markers);
                var element = angular.element(document.querySelector('.reviews'));
                element.addClass('hide');
                var secondElement = angular.element(document.querySelector('.reviewForm'));
                secondElement.removeClass('hide');
            },
            zoom_changed: function (map, eventName, originalEventArgs) {
                $scope.map.maxZoom(map)
            }
          }
        }
        $scope.windowOptions = {
          visible: false
        };

        MapService.getMarkers().then(function(marker) {
          for(var i = 0; i < marker.length; i++) {
            $scope.map.markers.push(marker[i].coords);
          }
        });

        $scope.reloadMap = function() {
          MapService.getMarkers().then(function(marker) {
              $scope.map.markers = []
            for(var i = 0; i < marker.length; i++) {
              $scope.map.markers.push(marker[i].coords);
            }
          });
        }

        $scope.onClick = function() {
          $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };
        $scope.closeClick = function() {
          $scope.windowOptions.visible = false;
        };
        $scope.title = "The Iron Yard!";

        var events = {
        places_changed: function (searchBox) {
        var place = searchBox.getPlaces();
        if (!place || place == 'undefined' || place.length == 0) {
            console.log('no place data :(');
            return;
        }

        $scope.map = {
            "center": {
                "latitude": place[0].geometry.location.lat(),
                "longitude": place[0].geometry.location.lng()
            },
            "zoom": 18
        };
    }
};
$scope.searchbox = {
  template: 'searchbox.tpl.html',
  events: events
  };

        var api;
        uiGmapGoogleMapApi.then(function(googleMaps) {
          api = googleMaps;
        });

        uiGmapGoogleMapApi.then(function(maps) {

        });

        var watchCallback = function(){
          console.log("hello from maps");
        }

        $scope.$on('review:created', watchCallback);

      })

                  //***** Custom Map Buttons *****//
    // .controller('controlCtrl', function ($scope) {
    //   $scope.controlText = 'Fav1';
    //   $scope.danger = false;
    //   $scope.controlClick = function () {
    //     $scope.danger = !$scope.danger;
    //     alert('We can make this do something');
    //   };
    // })



})();

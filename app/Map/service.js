(function () {
'use strict';
  angular
        .module('map')
        .factory('MapService', function($http) {
          var reviewsUrl = "http://tiy-fee-rest.herokuapp.com/collections/MapReview1"

          var getMarkers = function() {
            return $http.get(reviewsUrl).then(function(reviews){
              console.log(reviews.data);
              return reviews.data;
            })
          };

          return {
            getMarkers: getMarkers
          }
    });
})();

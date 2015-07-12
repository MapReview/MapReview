(function () {
'use strict';
  angular
        .module('map')
        .factory('MapService', function($http) {
          var reviewsUrl = "http://tiy-fee-rest.herokuapp.com/collections/MapReview1"

          var getMarkers = function() {
            return $http.get(reviewsUrl).then(function(reviews){
              return reviews.data;
            })
          };

          var getSingleReview = function(){
            return $http.get(reviewsUrl).success(function(reviews){
              return reviews;
            });
          };

          return {
            getMarkers: getMarkers,
            getSingleReview: getSingleReview
          }
    });
})();

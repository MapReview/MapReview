(function() {
  'use strict';
  angular
    .module('reviews')
    .factory('ReviewsService', function($http, $rootScope) {
      var reviewsUrl = "http://tiy-fee-rest.herokuapp.com/collections/MapReview"

      var getReviews = function() {
        return $http.get(reviewsUrl).then(function(reviews){
          return reviews;
        })
      };

      var sendReview = function(review){
        $http.post(reviewsUrl, review).success(function(response){
          $rootScope.$broadcast('review:created');
        }).error(function(error){
          console.log("error " + error);
        })
      };

      return {
        getReviews: getReviews,
        sendReview: sendReview
      };

    });
})();

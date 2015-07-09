(function() {
  'use strict';
  angular
    .module('reviews')
    .factory('ReviewsService', function($http, $rootScope){
      var reviewsUrl = "http://tiy-fee-rest.herokuapp.com/collections/MapReview"

      var getReviews = function(){
        return $http.get(reviewsUrl).then(function(reviews){
          console.log(reviews);
          return reviews;
        })
      };

      return{
        getReviews: getReviews
      };

    });
})();

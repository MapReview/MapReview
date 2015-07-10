(function() {
  'use strict';
  angular
    .module('reviews')
    .controller('ReviewsController', function($scope, ReviewsService){

      var vm = this;

      vm.review = {};

      ReviewsService.getReviews().then(function(reviews){
        console.log(reviews);
        vm.reviews = reviews;
      });

      vm.getReview = function(review){

        console.log(review);
        vm.review = {};

      }

    });

})();

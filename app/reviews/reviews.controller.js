(function() {
  'use strict';
  angular
    .module('reviews')
    .controller('ReviewsController', function($scope){

      var vm = this;

      ReviewsService.getReviews().then(function(reviews){
        vm.reviews = reviews;
      })

    });

})();

(function() {
  'use strict';
  angular
    .module('reviews')
    .controller('ReviewsController', function($scope, ReviewsService){

      var vm = this;

      vm.review = {};

      ReviewsService.getReviews().then(function(reviews){
        vm.reviews = reviews.data;
      });

      vm.getReview = function(lat, lng, review){
        vm.review.lat = lat;
        vm.review.lng = lng;
        ReviewsService.sendReview(review);
        vm.review = {};
        var element = angular.element(document.querySelector('.reviewForm'));
        element.addClass('hide');
        var secondElement = angular.element(document.querySelector('.reviews'));
        secondElement.removeClass('hide');
      }

      var watchCallback = function () {
          ReviewsService.getReviews().then(function (reviews) {
            vm.reviews = reviews.data;
          });
        };

      $scope.$on('review:created', watchCallback);

    });

})();

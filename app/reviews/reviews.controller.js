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

      vm.getReview = function(coords, review){
        vm.review.coords = coords;
        ReviewsService.sendReview(review);
        vm.review = {};
        var element = angular.element(document.querySelector('.reviewForm'));
        element.addClass('hide');
        var secondElement = angular.element(document.querySelector('.reviews'));
        secondElement.removeClass('hide');
      }

      vm.deleteReview = function(id){
        ReviewsService.deleteReview(id);
      }

      vm.editReview = function(review, id){
        ReviewsService.editReview(review, id);
      }

      var watchCallback = function () {
          ReviewsService.getReviews().then(function (reviews) {
            vm.reviews = reviews.data;
          });
        };

      $scope.$on('review:created', watchCallback);
      $scope.$on('review:deleted', watchCallback);
      $scope.$on('review:edited', watchCallback);
    });

})();

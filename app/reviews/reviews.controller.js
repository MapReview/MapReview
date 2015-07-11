(function() {
  'use strict';
  angular
    .module('reviews')
    .controller('ReviewsController', function($scope, ReviewsService, $auth){

      var vm = this;

      vm.isAuthenticated = function() {
        return $auth.isAuthenticated();
      };

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


      vm.cancelPost = function () {
        var element = angular.element(document.querySelector('.reviewForm'));
        element.addClass('hide');
        var secondElement = angular.element(document.querySelector('.reviews'));
        secondElement.removeClass('hide');
      }

      vm.deleteReview = function(id){
        ReviewsService.deleteReview(id);
      }

      vm.openEdit = function(ti, re, ra){
        console.log(ti, re, ra);
        vm.review = {title: ti, review: re, rating: ra};

        console.log(vm.review);


        var element = angular.element(document.querySelector('.reviewForm'));
        element.removeClass('hide');
        var secondElement = angular.element(document.querySelector('.reviews'));
        secondElement.addClass('hide');

      }

      vm.submitEditReview = function(review, id){
        ReviewsService.submitEditReview(review, id);
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

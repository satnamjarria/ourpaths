'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:ViewpathCtrl
 * @description
 * # ViewpathCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('ViewpathCtrl', function ($scope, $rootScope) {
    $rootScope.bodyClass = 'view-page';
    $scope.sideBarToggle = true;
    $scope.responseJson = {
      firstName: 'Alan',
      lastName: 'Gram',
      years: '1951-2004',
      quote:'I hear and forget. I see and I remember. I do and I understand.',
      family:[
        {
          imgUrl:'../images/elizabeth.jpg',
          fullName:'Debbie Gram',
          relationship:'Wife'
        },
        {
          imgUrl:'../images/dave-father.jpg',
          fullName:'Dave Gram',
          relationship:'Father'
        },
        {
          imgUrl:'../images/vanessa.jpg',
          fullName:'Vanessa Gram',
          relationship:'Daughter'
        },
        {
          imgUrl:'../images/greg.jpg',
          fullName:'Greg Gram',
          relationship:'Son'
        },
        {
          imgUrl:'../images/anie.jpg',
          fullName:'Anie Gram',
          relationship:'Mother'
        },
        {
          imgUrl:'../images/andrea.jpg',
          fullName:'Andrea Gram',
          relationship:'Daughter'
        }
      ],
      joy:{
        cover:{
          imgUrl:'../images/beleze.jpg',
          desc:'Fly Fishing'
        },
        thumbs:[
          {
            imgUrl:'../images/fishing.jpg',
            fullName:'Fly Fishing'
          },
          {
            imgUrl:'../images/stephcurry.jpg',
            fullName:'Golden State Warriors'
          },
          {
            imgUrl:'../images/rockclimbing.jpg',
            fullName:'Rock Climbing'
          },
          {
            imgUrl:'../images/skydiving.jpg',
            fullName:'Sky Diving'
          },
          {
            imgUrl:'../images/yosemite.jpg',
            fullName:'Yosemite'
          },
          {
            imgUrl:'../images/belizethumb.jpg',
            fullName:'Belize'
          },
        ]
      }
    };
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
  });

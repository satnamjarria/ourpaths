'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('LibraryCtrl', function ($scope, $rootScope) {
    $rootScope.bodyClass = 'create-page';
    $scope.activeSideItem = 4;
    $scope.sideBarToggle = true;
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
    $scope.hideSidebar = function(){
      $scope.sideBarToggle = true;
    };
    $scope.responseJson = {
      dashInfo:{
        paths:3,
        guestbooks:3,
        friends: 1256,
        guestbookMembers: 400
      },
      activePaths:{
        numActive:1,
        paths:[
          {
            image:'../images/john-waters.jpg',
            title:'JOHN WATERS',
            desc:'1955-1999'
          }
        ]
      },
      favPaths:{
        numPaths:1,
        paths:[
          {
          image:'../images/s-dali.jpg',
          title:'Salvador Dali',
          desc:'1955-1999'
        }
          ]
      }

    };
  });

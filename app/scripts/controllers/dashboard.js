'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.activeSideItem = 2;
    //set response json

    $scope.responseJson = {
      dashInfo:{
        paths:3,
        guestbooks:3,
        friends: 1256,
        guestbookMembers: 400
      },
      activePaths:{
        numActive:1,
        image:'../images/john-waters.jpg',
        title:'JOHN WATERS',
        desc:'1955-1999'
      },
      recentPaths:{
        numPaths: 4,
        paths:[
          {
            image:'../images/miles.jpg',
            title:'Sir Miles Davis',
            desc:'1955-1999'
          },
          {
            image:'../images/s-dali.jpg',
            title:'Salvador Dali',
            desc:'1955-1999'
          },
          {
            image:'../images/hr-giger.jpg',
            title:'HR Giger',
            desc:'1955-1999'
          },
          {
            image:'../images/john-waters.jpg',
            title:'John Waters',
            desc:'1955-1999'
          }
        ]
      },
      favPaths:{
        numPaths:1,
        details:{
          image:'../images/s-dali.jpg',
          title:'Salvador Dali',
          desc:'1955-1999'
        }
      }

    };
    $scope.sideBarToggle = true;
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
    $scope.hideSidebar = function(){
      $scope.sideBarToggle = true;
    };
  });

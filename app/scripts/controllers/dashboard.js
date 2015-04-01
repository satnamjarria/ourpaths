'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('DashboardCtrl', function ($scope, $rootScope) {
    $rootScope.bodyClass = 'create-page';
    $scope.activeSideItem = 2;
    //set response json

    $scope.responseJson = {
      dashInfo:{
        featured:2,
        recents:2,
        favorites:3,
        signatures:1234,
        popular:6,
        paths:3,
        guestbooks:3,
        friends: 1256,
        guestbookMembers: 400
      },
      popularPaths:{
        numActive:1,
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
            title:'JOHN WATERS',
            desc:'1955-1999'
          },
          {
            image:'../images/joan-rivers.jpg',
            title:'Joan Rivers',
            desc:'1955-1999'
          },
          {
            image:'../images/robin-williams.jpg',
            title:'Robin Williams',
            desc:'1955-1999'
          },
          {
            image:'../images/carl.jpg',
            title:'Carl Sagan',
            desc:'1955-1999'
          }
        ]

      },
      recentPaths:{
        numPaths: 2,
        paths:[
          {
            image:'../images/carl.jpg',
            title:'Carl Sagan',
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
        paths: [
          {
          image: '../images/elizabeth.jpg',
          title: 'Elizabeth Hill',
          desc: '1955-1999'
        },
        {
          image: '../images/andrew.jpg',
          title: 'Andrew Simon',
          desc: '1955-1999'
        },
          {
            image: '../images/peter.jpg',
            title: 'Peter Stewart',
            desc: '1955-1999'
          }
          ]
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

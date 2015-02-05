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
    $scope.sideBarToggle = true;
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
  });

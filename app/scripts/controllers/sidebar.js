'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('SidebarCtrl', function ($scope) {
    $scope.activeSideItem = $scope.activeSideItem || 3;
    $scope.setActive = function(ind){
      $scope.activeSideItem = ind;
    };
    $scope.isActive = function(ind){
      return $scope.activeSideItem === ind;
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.className = 'glyphicon glyphicon-minus';
    $scope.toggleClass = function(){
      if ($scope.className === 'glyphicon glyphicon-plus'){
        $scope.className = 'glyphicon glyphicon-minus';
      }
      else if ($scope.className === 'glyphicon glyphicon-minus'){
        $scope.className = 'glyphicon glyphicon-plus';
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:TermsOfUseCtrl
 * @description
 * # TermsOfUseCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('TermsOfUseCtrl', function ($scope, $rootScope) {
    //change body class
    $rootScope.bodyClass = 'terms-page';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

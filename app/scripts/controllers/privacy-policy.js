'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:PrivacyPolicyCtrl
 * @description
 * # PrivacyPolicyCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('PrivacyPolicyCtrl', function ($scope, $rootScope) {
    $rootScope.bodyClass = 'privacy-page';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

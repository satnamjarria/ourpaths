'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:HealingCtrl
 * @description
 * # HealingCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('HealingCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.healingList = [
      'Meditations',
      'Reconciliations',
      'Practicalities',
      'Donate',
      'Volunteer',
      'Gifts'
    ];
    $rootScope.bodyClass = 'healing-page';
    $scope.sideBarToggle = true;
    $scope.activeSideItem = 6;
    $scope.sideBarToggle = true;
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
    $scope.hideSidebar = function(){
      $scope.sideBarToggle = true;
    };
    $scope.responseJson = {
      quotes:[
        {
          image:'../images/emily.jpg',
          title:'Emily Dickinson',
          quote:'My life closed twice before its close; It yet remains to see If Immortality unveil A third event to me, ' +
          'So huge, so hopeless to conceive, As these that twice befell. Parting is all we know of heaven, And all we need of hell.'
        },
        {
          image:'../images/einstein.jpg',
          title:'Albert Einstein',
          quote: 'Man would indeed be in a poor way if he had to be restrained by fear of punishment and hope of reward after death.'
        },
        {
          image:'../images/einstein.jpg',
          title:'Thomas Paine',
          quote:'I believe in one God, and no more; and' +
          'I hope for happiness beyond this life. I believe in the equality of man; and I believe that religious ' +
          'duties consist in doing justice, loving mercy, and endeavoring to make our fellow creatures happy.'
        }
      ]
    };
  });

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
    $scope.sidebarClasses = 'col-sm-2 col-md-2 sidebar';
    $scope.sideBarToggle = true;
    $scope.elementClasses = {'info':'glyphicon glyphicon-plus', 'joy':'glyphicon glyphicon-plus', 'family':'glyphicon glyphicon-plus',
                            'organization':'glyphicon glyphicon-plus'};
    $scope.className = 'glyphicon glyphicon-minus';
    $scope.toggleClass = function(param){
      //if ($scope.className === 'glyphicon glyphicon-plus'){
      //  $scope.className = 'glyphicon glyphicon-minus';
      //}
      //else if ($scope.className === 'glyphicon glyphicon-minus'){
      //  $scope.className = 'glyphicon glyphicon-plus';
      //}
      if($scope.elementClasses[param] === 'glyphicon glyphicon-plus'){
        $scope.elementClasses[param] = 'glyphicon glyphicon-minus';
      }
      else if ($scope.elementClasses[param] === 'glyphicon glyphicon-minus'){
        $scope.elementClasses[param] = 'glyphicon glyphicon-plus';
      }
    };//end toggleClass
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
  });

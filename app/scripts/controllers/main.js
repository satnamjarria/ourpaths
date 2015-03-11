'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $modal, $location, $modalStack) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isCollapsed = true;
    $scope.user = '';
    $scope.password = '';
    $scope.authUser = function(){
      if($scope.user === 'admin' && $scope.password === 'admin'){
        //$scope.signinModalInstance.close({});
        $modalStack.dismissAll();
        $location.path( '/dashboard' );
      }
      else{
        alert('wrong username or password');
      }
    };
    $scope.openSignin = function (size) {

      $scope.signinModalInstance = $modal.open({
        templateUrl: '../../components/templates/signin.html',
        size: size
      });
    };
    $scope.openSignup = function(size){
      $scope.singupModalInstance = $modal.open({
        templateUrl:'../../components/templates/signup.html',
        size:size
      });
    };
    $scope.scrollTo = function(hash){
      console.log('in scrollto');
      $location.hash(hash);
    };
    $scope.landingPage = true;
    $rootScope.bodyClass = 'landing-page';
  });


'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:PathCtrl
 * @description
 * # PathCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('PathCtrl', function ($scope, $rootScope) {
    //change body class
    $rootScope.bodyClass = 'create-page';
    $scope.childCount = 1;
    $scope.children=[
      {childImg:'child1Img',
       fileReader:'child1FileReader'
      }
    ];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.formData = {};
    $scope.dropzoneConfig = {
      url:'/upload.php',
      parallelUploads: 3,
      maxFileSize: 30,
      addRemoveLinks: true,
      autoProcessQueue:false,
      thumbnailWidth:170,
      thumbnailHeight:170,
      dictDefaultMessage:'Drop images here or click here to select images.'
    };
    $scope.sidebarClasses = 'col-sm-2 col-md-2 sidebar';
    $scope.sideBarToggle = true;
    $scope.showPrevMarriage = false;
    $scope.marriageBt = '+ Add previous marriage if desired';
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
    $scope.hideSidebar = function(){
      $scope.sideBarToggle = true;
    };
    $scope.togglePrevMarriage = function(){
      $scope.showPrevMarriage = !$scope.showPrevMarriage;
      if($scope.showPrevMarriage){
        $scope.marriageBt = 'hide previous marriage info';
      }
      else{
        $scope.marriageBt = '+ Add previous marriage if desired';
      }

    };
    $scope.showPic = true;
    $scope.readMethod = "readAsDataURL";
    $scope.onReaded = function( e, file , param){
      $scope[param] = e.target.result;
      //$scope.img = e.target.result;
      $scope.file = file;
    };
    $scope.addChild = function(){
      $scope.childCount++;
      $scope.children.push(
        {childImg:'child'+ $scope.childCount+ 'Img',
          fileReader:'child'+$scope.childCount+ 'FileReader'
        }
      );
    };
    $scope.onRead = function(className){
      console.log(className);
    };

  });

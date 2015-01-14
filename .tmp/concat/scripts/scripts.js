'use strict';

/**
 * @ngdoc overview
 * @name outpathsApp
 * @description
 * # outpathsApp
 *
 * Main module of the application.
 */
angular
  .module('outpathsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';
/*global $:false */
/**
 * @ngdoc directive
 * @name outpathsApp.directive:toggleAccordion
 * @description
 * # toggleAccordion
 */
angular.module('outpathsApp')
  .directive('toggleAccordion', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        //element.text('this is the toggleAccordion directive');
        $(element).click(function(){
          $('.accordion').slideToggle();
        });
      }
    };
  });

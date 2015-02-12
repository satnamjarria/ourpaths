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
    'textAngular',
    'ui.bootstrap',
    'ngDropzone'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl'
      })
      .when('/path', {
        templateUrl: 'views/path.html',
        controller: 'PathCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


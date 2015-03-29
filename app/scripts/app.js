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
    'ngDropzone',
    'ngFileReader',
    'duScroll'
  ])
  .config(function ($routeProvider, $httpProvider) {
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
      .when('/healing', {
        templateUrl: 'views/healing.html',
        controller: 'HealingCtrl'
      })
      .when('/view/path/:id', {
        templateUrl: 'views/viewpath.html',
        controller: 'ViewpathCtrl'
      })
      .when('/terms-of-use', {
        templateUrl: 'views/terms-of-use.html',
        controller: 'TermsOfUseCtrl'
      })
      .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html',
        controller: 'PrivacyPolicyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });


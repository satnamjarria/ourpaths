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

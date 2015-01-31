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
      link: function postLink(scope, element, attr) {
        //element.text('this is the toggleAccordion directive');
        //console.log(attr);
        $(element).click(function(){
          //$('.accordion.' + attr.target).toggle('slide');
          $('#' + attr.target).click().on('change',function(){
            $('#'+attr.desc).html('File Selected: ' + $('#'+attr.target).val());
          });
        });
      }
    };
  });

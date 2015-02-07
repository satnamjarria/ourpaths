'use strict';
/*global $:false */
/**
 * @ngdoc directive
 * @name outpathsApp.directive:pathThumbnail
 * @description
 * # pathThumbnail
 */
angular.module('outpathsApp')
  .directive('pathThumbnail', function () {
    return {
      restrict: 'E',
      templateUrl:'../../components/templates/imageDirective.html',
      scope:{
        img_info:'=info'
      },
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

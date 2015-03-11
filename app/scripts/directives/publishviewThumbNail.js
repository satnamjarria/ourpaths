'use strict';
/*global $:false */
/**
 * @ngdoc directive
 * @name outpathsApp.directive:publishviewThumbnail
 * @description
 * # publishviewThumbnail
 */
angular.module('outpathsApp')
  .directive('publishviewThumbnail', function () {
    return {
      restrict: 'E',
      templateUrl:'../../components/templates/publishViewThumbnail.html',
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

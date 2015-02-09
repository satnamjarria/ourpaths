'use strict';
/*global $:false */
angular.module('ngDropzone', [])

.directive('ngDropzone', function () {
  return {
    restrict: 'AE',
    template: '<div ng-transclude></div>',
    transclude: true,
    scope: {
      dropzone: '=',
      dropzoneConfig: '=',
      eventHandlers: '='
    },
    link: function(scope, element, attrs, ctrls) {
      try { Dropzone }
      catch (error) {
        throw new Error('Dropzone.js not loaded.');
      }

      var dropzone = new Dropzone(element.get(0), scope.dropzoneConfig);
      var scrollPos = 0;
      $(document).on('click','.add-image',function(){
        $('.dz-message').click();
      });
      dropzone.on("addedfile", function(file) {
        var formWidth = $('.dropzone').width();
        var dropzoneWidth = $('.dropzone-row').width();
        var diff = formWidth - dropzoneWidth;
        if(formWidth < dropzoneWidth){
          scrollPos += (dropzoneWidth - formWidth);
        }
        $('.add-image').remove();
        /* Maybe display some more file information on your page */
        //$('.dropzone-row').scrollLeft(scrollPos);

        $('.dz-preview:last-child').after('<div class="dz-preview dz-image-preview add-image"><span class="glyphicon glyphicon-plus"></span></div>')
        $('.dropzone-row').scrollLeft($('.dropzone-row').scrollLeft() + $('.add-image').offset().left);
      });

      if (scope.eventHandlers) {
        Object.keys(scope.eventHandlers).forEach(function (eventName) {
          dropzone.on(eventName, scope.eventHandlers[eventName]);
        });
      }

      scope.dropzone = dropzone;
    }
  };
});

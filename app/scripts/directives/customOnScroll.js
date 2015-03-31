/**
 * Created by v-singhs-kfo on 3/2/15.
 */
angular.module('outpathsApp').directive('customOnScroll', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var el_id=attrs.id;
      $(window).scroll(function(){
        if ($(this).scrollTop() > 135) {
          $('#' + el_id).addClass('fixed');
        } else {
          $('#' + el_id).removeClass('fixed');
        }
      });
    }
  };
});

/**
 * Created by v-singhs-kfo on 3/2/15.
 */
angular.module('outpathsApp').directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeFunc('hi'));
    }
  };
});

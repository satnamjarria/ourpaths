'use strict';

describe('Controller: ViewpathCtrl', function () {

  // load the controller's module
  beforeEach(module('outpathsApp'));

  var ViewpathCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewpathCtrl = $controller('ViewpathCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

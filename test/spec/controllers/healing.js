'use strict';

describe('Controller: HealingCtrl', function () {

  // load the controller's module
  beforeEach(module('outpathsApp'));

  var HealingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealingCtrl = $controller('HealingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: SoftwareCtrl', function () {

  // load the controller's module
  beforeEach(module('giantSteps2App'));

  var SoftwareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoftwareCtrl = $controller('SoftwareCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

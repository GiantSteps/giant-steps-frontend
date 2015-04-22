'use strict';

describe('Controller: AdminNewCtrl', function () {

  // load the controller's module
  beforeEach(module('giantSteps2App'));

  var AdminNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminNewCtrl = $controller('AdminNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

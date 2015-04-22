'use strict';

describe('Controller: AdminIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('giantSteps2App'));

  var AdminIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminIndexCtrl = $controller('AdminIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

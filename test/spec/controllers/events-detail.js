'use strict';

describe('Controller: EventsDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('giantSteps2App'));

  var EventsDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsDetailCtrl = $controller('EventsDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

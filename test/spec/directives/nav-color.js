'use strict';

describe('Directive: navColor', function () {

  // load the directive's module
  beforeEach(module('giantSteps2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nav-color></nav-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navColor directive');
  }));
});

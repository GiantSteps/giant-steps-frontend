'use strict';

describe('Service: canvasService', function () {

  // load the service's module
  beforeEach(module('giantSteps2App'));

  // instantiate service
  var canvasService;
  beforeEach(inject(function (_canvasService_) {
    canvasService = _canvasService_;
  }));

  it('should do something', function () {
    expect(!!canvasService).toBe(true);
  });

});

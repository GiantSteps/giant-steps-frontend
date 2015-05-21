'use strict';

describe('Service: markdownService', function () {

  // load the service's module
  beforeEach(module('giantSteps2App'));

  // instantiate service
  var markdownService;
  beforeEach(inject(function (_markdownService_) {
    markdownService = _markdownService_;
  }));

  it('should do something', function () {
    expect(!!markdownService).toBe(true);
  });

});

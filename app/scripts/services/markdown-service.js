'use strict';

/* global Showdown:false */

/**
 * @ngdoc service
 * @name giantSteps2App.markdownService
 * @description
 * # markdownService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('markdownService', function ($q) {



    return {
      convert: function (text) {
        var converter = new Showdown.converter();

        var markdown = converter.makeHtml(text);


        return markdown;
      }
    };
  });

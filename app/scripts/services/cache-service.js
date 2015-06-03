'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.cacheService
 * @description
 * # cacheService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('cacheService', function ($cacheFactory) {


    return {
      text: function () {
        return $cacheFactory('text');
      },
      events: function(){
        return $cacheFactory('events');
      },
      publications: function(){
        return $cacheFactory('publications');
      },
      deliverables: function(){
        return $cacheFactory('deliverables');
      }
    };
  });

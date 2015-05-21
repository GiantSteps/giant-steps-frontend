'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.cacheService
 * @description
 * # cacheService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('cacheService', function ($cacheFactory) {


    var cache = {

      text: function(){
        return $cacheFactory('text');
      },
      events: function(){
        return $cacheFactory('events');
      }

    };


    return {
      text: function () {
        return cache.text();
      },
      events: function(){
        return cache.events();
      }
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.eventService
 * @description
 * # eventService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('eventService', function ($q, $http) {

  var events = {
    getData: function(){
      var deferred = $q.defer();

      $http.get('events.json').success(function(response){
        deferred.resolve(response);
      }).error(function(err){
        deferred.reject(err);
      });

      return deferred.promise;


    }
  };

  return {
    getData: function () {
      return events.getData();
    }
  };
});

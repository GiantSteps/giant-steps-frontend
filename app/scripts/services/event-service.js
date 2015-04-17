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
    baseUrl: 'http://localhost:5000/api/',

    // -------------------------------------------------
    //
    // Index
    // 
    // -------------------------------------------------
    
    getData: function(){
      var self = this;
      var deferred = $q.defer();

      $http.get(self.baseUrl + 'events').success(function(response){
        console.log(response);
        deferred.resolve(response);
      
      }).error(function(err, msg){
        deferred.reject();
      });

      return deferred.promise;
    },

    // -------------------------------------------------
    //
    // Create
    // 
    // -------------------------------------------------
    
    postData: function(obj){
      $http.post(obj).success(function(response){
        console.log(response);
      });
    }
  };

  return {
    getData: function () {
      return events.getData();
    }
  };
});

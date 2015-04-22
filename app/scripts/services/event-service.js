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
        deferred.reject(err);
      });

      return deferred.promise;
    },

    // -------------------------------------------------
    //
    // Create
    // 
    // -------------------------------------------------
    
    postData: function(form){

      var self = this;
      var deferred = $q.defer();


      $http.post(self.baseUrl + 'events', form).success(function(response){
        
        console.log(response);
        deferred.resolve(response);
      

      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });

      return deferred.promise;
    },


    destroy: function(id){
      var self = this;
      var deferred = $q.defer();

      $http.delete(self.baseUrl + 'events/' + id).success(function(response){
        console.log(response);
        deferred.resolve(response);

      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });

      return deferred.promise;
    }
  };


  // -------------------------------------------------
  //
  // API Returns
  // 
  // -------------------------------------------------
  
  return {
    getData: function () {
      return events.getData();
    },
    postData: function(form){
      return events.postData(form);
    },
    destroy: function(id){
      return events.destroy(id);
    }
  };
});

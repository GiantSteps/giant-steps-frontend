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



    baseUrl: 'http://localhost:5000/api/events',



    // -------------------------------------------------
    //
    // Index
    // 
    // -------------------------------------------------
    
    getAllEvents: function(){
      var self = this;
      var deferred = $q.defer();

      $http.get(self.baseUrl).success(function(response){
        console.log(response);
        deferred.resolve(response);
      
      }).error(function(err){
        deferred.reject(err);
      });

      return deferred.promise;
    },


    // -------------------------------------------------
    //
    // Single
    // 
    // -------------------------------------------------
    
    getSingleEvent: function(id){
      var self = this;
      var deferred = $q.defer();

      $http.get(self.baseUrl + '/' + id).success(function(response){
        console.log(response);
        deferred.resolve(response);

      }).error(function(err){
        console.log(err);
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


      $http.post(self.baseUrl, form).success(function(response){
        
        console.log(response);
        deferred.resolve(response);
      

      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });

      return deferred.promise;
    },




    // -------------------------------------------------
    //
    // Update
    // 
    // -------------------------------------------------
    putData: function(id, form){
      var self = this;

      var deferred = $q.defer();

      $http.put(self.baseUrl + '/' + id, form).success(function(response){
        console.log(response);
        deferred.resolve(response);
      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });

      return deferred.promise;
    },









    // -------------------------------------------------
    //
    // Delete
    // 
    // -------------------------------------------------
    
    destroy: function(id){
      var self = this;
      var deferred = $q.defer();

      $http.delete(self.baseUrl +'/' + id).success(function(response){
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
    getAllEvents: function () {
      return events.getAllEvents();
    },

    getSingleEvent: function(id){
      return events.getSingleEvent(id);
    },

    putData: function(id, form){
      return events.putData(id, form);
    },

    postData: function(form){
      return events.postData(form);
    },
    destroy: function(id){
      return events.destroy(id);
    }
  };
});

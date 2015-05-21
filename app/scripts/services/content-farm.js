'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.contentFarm
 * @description
 * # contentFarm
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('contentFarm', [
  '$q',
  '$cacheFactory',
  'contentfulClient',
  'cacheService',
  function ($q, $cacheFactory, contentfulClient, cacheService) {
    // Service logic
    // ...

    var ids = {
      eventsId: '5SOxrPbANq4gQ8W6MUeW6g',
      textsId: '5DFddAHe80y2EsG6gewGmi'
    };

    var textCache = cacheService.text();
    var eventsCache = cacheService.events();




    var content = {
      

      // -------------------------------------------------
      //
      // Events
      // 
      // -------------------------------------------------
      
      events: {
        
        index: function(){
          var deferred = $q.defer();

          if (eventsCache.get('events')){
            
            deferred.resolve(eventsCache.get('events'));
          }

          else{
            contentfulClient.entries({
              'content_type': ids.eventsId,
              order: 'fields.dateTime'

            }).then(function(events){
              // ------------------------------------------------
              // Add to cache
              //
              
              eventsCache.put('events', events);

              // ------------------------------------------------
              // Retrieve from cache
              //
              
              deferred.resolve(eventsCache.get('events'));

            }, function(err){
              console.log(err);
              deferred.reject(err);
            });
          }

          

          return deferred.promise;
        },


        show: function(id){
          var deferred = $q.defer();


          contentfulClient.entries({
            'content_type': ids.eventsId,
            'fields.slug': id,
            limit: 1
          }).then(function(event){
            deferred.resolve(event);
          }, function(err){
            console.log(err);
            deferred.reject(err);
          });

          return deferred.promise;
        }
      },


      // -------------------------------------------------
      //
      // Static Texts
      // 
      // -------------------------------------------------
      
      text: {
        index: function(){
          var deferred = $q.defer();

          


          if (textCache.get('text')){
            
            deferred.resolve(textCache.get('text'));
          }

          else{

            contentfulClient.entries({
              'content_type': ids.textsId
            }).then(function(response){

              // ------------------------------------------------
              // Add to cache
              //
              
              textCache.put('text', response);

              // ------------------------------------------------
              // Retrieve from cache
              //
              
              deferred.resolve(textCache.get('text'));


            }, function(err){
              console.log(err);
              deferred.reject(err);
            });
          }



          

          return deferred.promise;
        }
      }


    };

    // Public API here
    return {
      eventsIndex: function () {
        return content.events.index();
      },
      eventsShow: function(id){
        return content.events.show(id);
      },
      textIndex: function(){
        return content.text.index();
      }
    };
  }
]);

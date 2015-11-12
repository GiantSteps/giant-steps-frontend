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
      textsId: '5DFddAHe80y2EsG6gewGmi',
      publicationsId: '4aver57i6AEmyaQ4SYSSio',
      deliverablesId: '4LUNA2sqm4WQ0Ue6ewmaOc',
      softwareId: '3yd4wfWccgcaQW24oagWKC',
      newsId: 'M3fej7oIGiOImiQwEkoS8',
      dataSets: '6Va4POKGt208EmOmiiCoUe'
    };

    var textCache = cacheService.text();
    var eventsCache = cacheService.events();
    var publicationsCache = cacheService.publications();
    var deliverablesCache = cacheService.deliverables();
    var softwareCache = cacheService.software();
    var newsCache = cacheService.news();




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
        },
      },

      // -------------------------------------------------
      //
      // Downloads
      // 
      // -------------------------------------------------
      
      publications: {
        
        index: function(){
          var deferred = $q.defer();

          if (publicationsCache.get('publications')){
            deferred.resolve(publicationsCache.get('publications'));
          }

          else{
            contentfulClient.entries({
              'content_type': ids.publicationsId
            }).then(function(response){

              // ------------------------------------------------
              // Add to cache
              //
              publicationsCache.put('publications', response);


              deferred.resolve(publicationsCache.get('publications'));

            }, function(err){
              console.log(err);
              deferred.reject(err);
            });

            
          }
          return deferred.promise;
        }
      },


      // ------------------------------------------------
      // Deliverables
      //
      deliverables: {
        index: function(){
          var deferred = $q.defer();



          if (deliverablesCache.get('deliverables')){
            var devs = deliverablesCache.get('deliverables');
            deferred.resolve(devs);
          }

          else{
            contentfulClient.entries({
              'content_type': ids.deliverablesId
            }).then(function(response){

              // ------------------------------------------------
              // Add to cache
              //
              deliverablesCache.put('deliverables', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(deliverablesCache.get('deliverables'));
              
            }, function(err){
              console.log(err);
              deferred.reject(err);
            });
          }

          return deferred.promise;
        }
      },


      // ------------------------------------------------
      // Software
      //
      software: {
        index: function(){
          var deferred = $q.defer();

          if (softwareCache.get('software')){
            var softwares = softwareCache.get('software');
            deferred.resolve(softwares);
          }

          else{
            contentfulClient.entries({
              'content_type': ids.softwareId
            }).then(function(response){

              // ------------------------------------------------
              // Add to cache
              //
              
              softwareCache.put('software', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(softwareCache.get('software'));
              
            }, function(err){
              deferred.reject(err);
              console.log(err);
            });
          }

          return deferred.promise;
        }
      },


      dataSets: {

        index: function(){
          var deferred = $q.defer();

          contentfulClient.entries({
            'content_type': ids.dataSets
          }).then(function(response){


            deferred.resolve(response);
          }, function(err){
            deferred.reject(err);
            console.log(err);
          });

          return deferred.promise;
        }



      },


      // ------------------------------------------------
      // News
      //

      news: {
        index: function(){
          var deferred = $q.defer();

          if (newsCache.get('news')){
            var news = newsCache.get('news');
            deferred.resolve(news);
          }

          else{
            contentfulClient.entries({
              'content_type': ids.newsId
            }).then(function(response){

              // ------------------------------------------------
              // Add to cache
              //
              
              newsCache.put('news', response);

              // ------------------------------------------------
              // Retrieve and fulfill promise
              //
              deferred.resolve(newsCache.get('news'));
              
            }, function(err){
              deferred.reject(err);
              console.log(err);
            });
          }

          return deferred.promise;

        },

        show: function(id){
          var deferred = $q.defer();


          contentfulClient.entries({
            'content_type': ids.newsId,
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
      },
      publicationsIndex: function(){
        return content.publications.index();
      },
      deliverablesIndex: function(){
        return content.deliverables.index();
      },
      softwareIndex: function(){
        return content.software.index();
      },
      newsIndex: function(){
        return content.news.index();
      },
      newsShow: function(id){
        return content.news.show(id);
      },

      dataSetsIndex: function(){
        return content.dataSets.index();
      }
    };
  }
]);

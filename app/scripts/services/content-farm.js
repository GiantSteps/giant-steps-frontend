'use strict';

/**
 * @ngdoc service
 * @name giantSteps2App.contentFarm
 * @description
 * # contentFarm
 * Factory in the giantSteps2App.
 */

var eventsData = 'https://s3.amazonaws.com/giant-steps-data/events.json';
var newsData = 'https://s3.amazonaws.com/giant-steps-data/news.json';
var projectsData = 'https://s3.amazonaws.com/giant-steps-data/projects.json';
var dataSetsData = 'https://s3.amazonaws.com/giant-steps-data/datasets.json';
var publicationsData = 'https://s3.amazonaws.com/giant-steps-data/publications.json';
var deliverablesData = 'https://s3.amazonaws.com/giant-steps-data/deliverables.json';
var softwareData = 'https://s3.amazonaws.com/giant-steps-data/software.json';

angular.module('giantSteps2App').factory('contentFarm', [
  '$q',
  '$cacheFactory',
  'cacheService',
  
  function ($q, $cacheFactory, cacheService) {
    var textCache = cacheService.text();
    var eventsCache = cacheService.events();
    var publicationsCache = cacheService.publications();
    var deliverablesCache = cacheService.deliverables();
    var softwareCache = cacheService.software();
    var newsCache = cacheService.news();

    var eventAssets = '';

    var content = {

      // Text / Projects
      text: {
        index: () => {
          var deferred = $q.defer();
          if (textCache.get('text')){
            deferred.resolve(textCache.get('text'));
          }
          else {
            fetch(projectsData)
              .then(res => res.json())
              .then(json => {
                textCache.put('text', json);
                deferred.resolve(textCache.get('text'));
              })
              .catch(err => deferred.reject(err));
          }
          return deferred.promise;
        }
      },

      // Events
      events: {
        index: () => {
          var deferred = $q.defer();
          if (eventsCache.get('events')) {
            deferred.resolve(eventsCache.get('events'));
          } else {
            fetch(eventsData)
              .then(res => res.json())
              .then(json => {
                eventsCache.put('events', json);
                deferred.resolve(eventsCache.get('events'));
              })
              .catch(err => deferred.reject(err));
          }
          return deferred.promise;

        },

        show: (showid) => {
          var deferred = $q.defer();
          // find target
          fetch(eventsData)
            .then(res => res.json())
            .then(json => {
              var target = json.items.find(e => e.fields.slug === showid);
              if (target) {
                if (target.fields.images && target.fields.images.length) {
                  for (var x = 0; x < target.fields.images.length; x++) {
                    var id = target.fields.images[x].sys.id;
                    var imgtarget = json.includes.Asset.find(a => a.sys.id === id);
                    if (imgtarget) {
                      target.fields.images[x].url = imgtarget.fields.file.url;
                    }
                  }
                }
                deferred.resolve(target);
              } else {
                deferred.reject(new Error('Missing target'));
              }

            })
            .catch(err => deferred.reject(err));

          return deferred.promise;
        },
      },

      // News
      news: {
        index: () => {
          var deferred = $q.defer();
          if (eventsCache.get('news')) {
            deferred.resolve(eventsCache.get('news'));
          } else {
            fetch(newsData)
              .then(res => res.json())
              .then(json => {
                eventsCache.put('news', json);
                deferred.resolve(eventsCache.get('news'));
              })
              .catch(err => deferred.reject(err));
          }
          return deferred.promise;
        },

        show: (newsid) => {
          var deferred = $q.defer();
          fetch(newsData)
            .then(res => res.json())
            .then(json => {
              var target = json.items.find(e => e.fields.slug === newsid);
              if (target && target.fields.images && target.fields.images.length) {
                for (var x = 0; x < target.fields.images.length; x++) {
                  var id = target.fields.images[x].sys.id;
                  var imgtarget = json.includes.Asset.find(a => a.sys.id === id);
                  if (imgtarget) {
                    target.fields.images[x].url = imgtarget.fields.file.url;
                  }
                }
              }
              if (target) {
                deferred.resolve(target);
              }
            })
            .catch(err => deferred.reject(err));
          return deferred.promise;
        },
      },
      dataSets: {
        index: () => {
          var deferred = $q.defer();
          fetch(dataSetsData)
            .then(res => res.json())
            .then(json => {
              deferred.resolve(json.items);
            })
            .catch(err => deferred.reject(err));
          
          return deferred.promise;
        },
      },
      publications: {
        index: () => {
          var deferred = $q.defer();
          fetch(publicationsData)
          .then(res => res.json())
            .then(json => {
              deferred.resolve(json.items);
            })
            .catch(err => deferred.reject(err));
          
          return deferred.promise;
        },
      },
      deliverables: {
        index: () => {
          var deferred = $q.defer();
          fetch(deliverablesData)
          .then(res => res.json())
            .then(json => {
              deferred.resolve(json.items);
            })
            .catch(err => deferred.reject(err));
          
          return deferred.promise;
        },
      },
      software: {
        index: () => {
          var deferred = $q.defer();
          fetch(softwareData)
          .then(res => res.json())
            .then(json => {
              deferred.resolve(json.items);
            })
            .catch(err => deferred.reject(err));
          
          return deferred.promise;
        },
      },
    };

    return {
      eventsIndex: () => content.events.index(),
      eventsShow: (id) => content.events.show(id),
      newsIndex: () => content.news.index(),
      newsShow: (id) => content.news.show(id),
      textIndex: () => content.text.index(),
      dataSetsIndex: () => content.dataSets.index(),
      publicationsIndex: () => content.publications.index(),
      deliverablesIndex: () => content.deliverables.index(),
      softwareIndex: () => content.software.index(),
    };
  }
]); 

'use strict';

/**
 * @ngdoc overview
 * @name giantSteps2App
 * @description
 * # giantSteps2App
 *
 * Main module of the application.
 */
angular
  .module('giantSteps2App', [
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ng-contentful',
    'headroom',
    'uiGmapgoogle-maps',
    'viewhead'
  ])
  .config(function ($stateProvider, $urlRouterProvider, contentfulClientProvider, uiGmapGoogleMapApiProvider) {





    // -------------------------------------------------
    //
    // Client Routes
    // 
    // -------------------------------------------------

    $urlRouterProvider.otherwise('/');


    // ------------------------------------------------
    // Main Routes
    //

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })



      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })


      .state('project', {
        url: '/project',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })

      .state('project.objectives', {
        url: '/objectives',
        templateUrl: 'views/projects.objectives.html'
      })

      .state('project.workplan', {
        url: '/workplan',
        templateUrl: 'views/projects.workplan.html'
      })

      .state('project.consortium', {
        url: '/consortium',
        templateUrl: 'views/projects.consortium.html'
      })

      .state('project.imprint', {
        url: '/imprint',
        templateUrl: 'views/projects.imprint.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })


      .state('events', {
        url: '/events',
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })


      .state('eventDetail', {
        url: '/events/:eventId',
        templateUrl: 'views/event-detail.html',
        controller: 'EventsDetailCtrl'
      })

      .state('downloads', {
        url: '/downloads',
        templateUrl: 'views/downloads.html',
        controller: 'DownloadsCtrl'
      })

      .state('downloads.software', {
        url: '/software',
        templateUrl: 'views/downloads.software.html'
      })

      .state('downloads.deliverables', {
        url: '/deliverables',
        templateUrl: 'views/downloads.deliverables.html'
      })

      .state('downloads.publications', {
        url: '/publications',
        templateUrl: 'views/downloads.publications.html'
      })

      .state('downloads.data', {
        url: '/data',
        templateUrl: 'views/downloads.data.html'
      })



      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })

      .state('newsDetail', {
        url: '/news/:newsId',
        templateUrl: 'views/news.detail.html',
        controller: 'NewsDetailCtrl'
      });


    contentfulClientProvider.setSpaceId('xrzr1u3na612');
    contentfulClientProvider.setAccessToken('a46fb11be216be4733826fad592b065889332f3d8d30d2aa49ea084d9e3632fc');

    // ------------------------------------------------
    // Set up maps
    //
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCJ_JGWN55v7ngy9J8RKkXOfn1Ebxy3CKE',
      v: '3.21',
      libraries: 'geometry, visualization'
    });





  });

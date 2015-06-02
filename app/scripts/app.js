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
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ng-contentful'
  ])
  .config(function ($stateProvider, $urlRouterProvider, contentfulClientProvider) {
    

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

    .state('publications', {
      url: '/publications',
      templateUrl: 'views/publications.html',
      controller: 'PublicationsCtrl'
    })

    .state('publicationDetail', {
      url: '/publications/:pubId',
      templateUrl: 'views/publication-detail.html',
      controller: 'PublicationsDetailCtrl'
    })

    ;


    contentfulClientProvider.setSpaceId('xrzr1u3na612');
    contentfulClientProvider.setAccessToken('a46fb11be216be4733826fad592b065889332f3d8d30d2aa49ea084d9e3632fc');






  });

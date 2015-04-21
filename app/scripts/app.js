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
    'angularFileUpload',
    'textAngular'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    

    // -------------------------------------------------
    //
    // Client Routes
    // 
    // -------------------------------------------------
    
    $urlRouterProvider.otherwise('/');

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
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/admin.html',
      controller: 'AdminCtrl'
    })
    .state('adminEvents', {
      url: '/admin/events',
      templateUrl: 'views/admin.events.html',
      controller: 'AdminCtrl'
    })
    .state('adminEventsNew', {
      url: '/admin/events/new',
      templateUrl: 'views/admin.events.new.html',
      controller: 'AdminCtrl'
    })
    ;






  });

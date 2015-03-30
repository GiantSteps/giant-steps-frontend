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
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
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
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html',
      controller: 'ProjectCtrl'
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
    });
  });

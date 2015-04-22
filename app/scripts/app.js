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
    'textAngular',
    'angular-datepicker'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    

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
      controller: 'EventsCtrl'
    })


    .state('admin', {
      url: '/admin',
      templateUrl: 'views/admin.html',
      controller: 'AdminIndexCtrl'
    })


    .state('adminEvents', {
      url: '/admin/events',
      templateUrl: 'views/admin.events.html',
      controller: 'AdminIndexCtrl'
    })


    .state('adminEventsNew', {
      url: '/admin/events/new',
      templateUrl: 'views/admin.events.new.html',
      controller: 'AdminNewCtrl'
    })


    .state('adminEventsEdit', {
      url: 'admin/events/edit/:eventId',
      templateUrl: 'views/admin.events.edit.html',
      controller: 'AdminEditCtrl'
    });






  });

'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:navBar
 * @description
 * # navBar
 */
angular.module('giantSteps2App')
  .directive('navBar', function () {

    var controller = function(){
    	this.navItems = [
    		{
    			name: 'Home',
    			state: 'home'
    		},
    		{
    			name: 'About',
    			state: 'about'
    		},
    		{
    			name: 'Workshops & Events',
    			state: 'events'
    		},
    		{
    			name: 'Projects',
    			state: 'projects'
    		},
    		{
    			name: 'Contact',
    			state: 'contact'
    		}
    	];
    }

    return {
      templateUrl: 'views/_navbar.html',
      restrict: 'AE',
      replace: true,
      controllerAs: 'navCtrl',
      controller: controller
    };
  });

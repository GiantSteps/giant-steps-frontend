'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:navBar
 * @description
 * # navBar
 */
angular.module('giantSteps2App')
  .directive('navBar', function () {

    var main = $('#main');

    var controller = function(){
    	this.navItems = [
    		{
    			name: 'About',
    			state: 'about'
    		},
    		{
    			name: 'Workshops &\xA0Events',
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


      this.scrollTo = function(){
        main.animate({
          scrollTop: $(window).height() - 150
        },300);
      };
    };

    return {
      templateUrl: 'views/_navbar.html',
      restrict: 'AE',
      replace: true,
      controllerAs: 'navCtrl',
      controller: controller
    };
  });

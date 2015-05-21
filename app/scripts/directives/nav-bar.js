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
    			name: 'Project',
    			state: 'project'
    		},
    		{
    			name: 'Contact',
    			state: 'contact'
    		}
    	];

    };


    var link = function($scope, element, attrs){
      if (attrs.display === 'fixed'){
        element.addClass('stick');
      }
      if (attrs.color){
        element.addClass('white');
      }
    };

    return {
      templateUrl: 'views/_navbar.html',
      restrict: 'AE',
      replace: true,
      controllerAs: 'navCtrl',
      controller: controller,
      link: link
    };
  });

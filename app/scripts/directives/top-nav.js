'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:topNav
 * @description
 * # topNav
 */
angular.module('giantSteps2App')
  .directive('topNav', function () {
    
    var controller = function(){
    	this.search = {
    		input: '',
	    	showResults: false,
    		criteria: [
    			{
    				title: 'Collaborating with Intelligent Machines: Interfaces for Creative Sound',
    				type: 'event',
    				link: '/'
    			},
    			{
    				title: 'Native Instruments KOMPLETE KONTROL with GiantSteps Technology',
    				type: 'news',
    				link: '/'
    			},
    			{
    				title: 'GiantSteps demo session at NEM 2014, Brussels',
    				type: 'event',
    				link: '/'
    			},
    			{
    				title: 'GianSteps panel discussion at Sónar+D',
    				type: 'event',
    				link: '/'
    			},
    			{
    				title: 'Using Props to Explore Design Futures: Making New Instruments',
    				type: 'paper',
    				link: '/'
    			}
	    	],

	    	toggleResults: function(){
	    		var self = this;
	    		self.showResults = !self.showResults;
	    	}
    	};
    };

    return {
      templateUrl: 'views/_top-nav.html',
      restrict: 'EA',
      replace: true,
      controllerAs: 'topNavCtrl',
      controller: controller,
      link: function(scope, element, attrs){
        
        if (attrs.color){
            var color = attrs.color;

            element.css({
                color: color
            });

            element.find('.nav-logo').css({
                background: 'url(images/logo-white.svg)'
            });

        }
      }
    };
  });

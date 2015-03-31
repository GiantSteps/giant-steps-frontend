'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:columns
 * @description
 * # columns
 */
angular.module('giantSteps2App')
  .directive('columns', function ($sce) {
    
  	var link = function($scope, element){
  		
  		var div = element;
  		
  		// ------------------------------------------------
  		// Resizes div to keep nav at top
  		//
  		
  		function resize(){
  			var fullHeight = div.height() - 150;
  			div.css({
  				height: fullHeight + 'px'
  			});
  		}

  		resize();
  	};


  	var controller = function(){

  		this.trust = function(text){
  			return $sce.trustAsHtml(text);
  		};
  		
  		this.workshops = [
  			{
  				title: 'CHI2015 Workshop: Collaborating with Intelligent Machines: Interfaces for Creative Sound',
  				date: Date.now(),
  				author: 'Admin',
  				link: '/'
  			},
  			{
  				title: 'Native Instruments KOMPLETE KONTROL with GiantSteps Technology',
  				date: Date.now(),
  				author: 'Michael Hlatky',
  				link: '/',
  				embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/o_9Xg_kqJls" frameborder="0" allowfullscreen></iframe>'
  			},
  			{
  				title: 'GiantSteps panel discussion at Sónar+D',
  				date: Date.now(),
  				author: 'Sergi Jorda',
  				link: '/',
  				image: 'http://www.giantsteps-project.eu/wp-content/uploads/2014/08/1cartell-1024x738.jpg'
  			}
  		];
  	};

    return {
      templateUrl: 'views/_columns.html',
      restrict: 'A',
      link: link,
      replace: true,
      controllerAs: 'colCtrl',
      controller: controller
    };
  });

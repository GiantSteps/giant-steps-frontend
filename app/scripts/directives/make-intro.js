'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:makeIntro
 * @description
 * # makeIntro
 */
angular.module('giantSteps2App').directive('makeIntro', function () {

	var link = function($scope, element, attrs){


		var intro = {
			main: document.getElementById('total-msg'),
			container: document.getElementById('main-container'),

			creativity: {
				el: document.getElementById('creativity-msg'),
				trigger: document.getElementById('creativity-trigger'),
				img: ''
			},
			experimentation: {
				el: document.getElementById('experimentation-msg'),
				trigger: document.getElementById('experimentation-trigger'),
				img: ''
			},

			performance: {
				el: document.getElementById('performance-msg'),
				trigger: document.getElementById('performance-trigger'),
				img: ''
			},

			process: function(target){
				console.log('hit');
			}
		};

		function process(){
			console.log('yo');
		}


		// ------------------------------------------------
		// Creativity toggles
		//
		
		intro.creativity.trigger.onclick = function(){
			intro.main.style.display = 'none';
			intro.creativity.el.style.display = 'block';
		};

		intro.creativity.el.onclick = function(){
			intro.main.style.display = 'block';
			intro.creativity.el.style.display = 'none';
		};

		// ------------------------------------------------
		// Experimentation toggles
		//

		intro.experimentation.trigger.onclick = function(){
			intro.main.style.display = 'none';
			intro.experimentation.el.style.display = 'block';
		};

		intro.experimentation.el.onclick = function(){
			intro.main.style.display = 'block';
			intro.experimentation.el.style.display = 'none';
		};

		// ------------------------------------------------
		// Performance toggles
		//

		intro.performance.trigger.onclick = function(){
			intro.main.style.display = 'none';
			intro.performance.el.style.display = 'block';
		};

		intro.performance.el.onclick = function(){
			intro.main.style.display = 'block';
			intro.performance.el.style.display = 'none';
		}
		


		


  		

	};

	return {
		restrict: 'A',
		link: link
	};
});

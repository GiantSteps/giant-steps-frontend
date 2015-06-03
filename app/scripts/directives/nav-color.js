'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:navColor
 * @description
 * # navColor
 */
angular.module('giantSteps2App').directive('navColor', function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			
			var target = document.getElementById('bottom-nav');

			if (attrs.color === 'white'){
				target.classList.add('white');
			}

			else{
				target.classList.remove('white');
			}
		}
	};
});

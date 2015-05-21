'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:loading
 * @description
 * # loading
 */
angular.module('giantSteps2App').directive('loading', function ($timeout) {
	return {
		restrict: 'A',
		link: function postLink(scope, element) {

			var chars = ['☜','☞','☝','☟', '◌', '◍', '◉', '⧰', '⧳', '☯'];

			var cycle = function(){
				$timeout(function(){
					element.text(chars[Math.floor(Math.random() * chars.length)]);
					cycle();
				}, 100);
			};

			cycle();
		}
	};
});

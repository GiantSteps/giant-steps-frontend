'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:wrapIframes
 * @description
 * # wrapIframes
 */
angular.module('giantSteps2App').directive('wrapIframes', function ($timeout) {

	return {
		restrict: 'A',
		link: function postLink(scope, element) {

			$timeout(function(){
				var frames = element.find('iframe');


				frames.each(function(){

					var width = $(this)[0].width;
					var height = $(this)[0].height;


					var ratio = (height / width) * 100;

					// ------------------------------------------------
					// Wrap iframe with containing div
					//
					
					$(this).wrap('<div class="embed"></div>');

					// ------------------------------------------------
					// Target newly created div with appropriate %
					//
					
					$(this).parent().css({
						paddingBottom: ratio + '%'
					});

				});
			},300);
			
		}
	};
});

'use strict';

/*global PIXI:false, requestAnimationFrame */


/**
 * @ngdoc directive
 * @name giantSteps2App.directive:addCanvas
 * @description
 * # addCanvas
 */
angular.module('giantSteps2App').directive('addCanvas', function ($rootScope, canvasService) {

	return {
		restrict: 'A',
		link: function(scope) {
			canvasService.init();
		}
	};
});

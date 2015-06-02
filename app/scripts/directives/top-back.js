'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:topBack
 * @description
 * # topBack
 */
angular.module('giantSteps2App').directive('topBack', function ($rootScope) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {

			scope.frameOpen = false;

			$rootScope.$on('open', function(){
				
				scope.frameOpen = true;
			});
		}
	};
});

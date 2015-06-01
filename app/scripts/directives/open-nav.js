'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:openNav
 * @description
 * # openNav
 */
angular.module('giantSteps2App').directive('openNav', function ($state) {

	return {
		templateUrl: 'views/_open-nav.html',
		restrict: 'A',
		replace: true,
		link: function postLink(scope) {

			var nav = document.getElementById('open-nav');
			var burger;
			

			scope.closeNav = function(){
				burger = document.getElementById('burger');
				nav.classList.remove('open');
				burger.classList.remove('opening');
			};

			scope.go = function(route){
				scope.closeNav();
				$state.go(route);
			};
		}
	};
});

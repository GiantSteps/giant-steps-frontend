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


			target.classList.remove('slide');
			target.classList.remove('white');
			target.classList.remove('reverse');

			if (attrs.color === 'white'){
				target.classList.add('white');
				if (attrs.slide === 'true'){
					target.classList.add('slide');
				}
			}

			else{
				if (attrs.slide === 'true'){
					target.classList.add('slide');
					target.classList.add('reverse');
				}
			}

			scope.scrollDown = function(){
				var height = window.innerHeight;

				$('.event-detail').animate({
					scrollTop: height / 2 + 'px'
				}, 400);
			};
		}
	};
});

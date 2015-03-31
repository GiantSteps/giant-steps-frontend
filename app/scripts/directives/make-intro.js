'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:makeIntro
 * @description
 * # makeIntro
 */
angular.module('giantSteps2App').directive('makeIntro', function () {

	var link = function($scope){

		$scope.intro = {
			main: true,
			creativity: false,
			experimentation: false,
			performance: false,

			show: function(section){
				var self = this;
				console.log(section);

				if (section === 'creativity'){
					self.main = false;
					self.creativity = true;
				}
				else if (section === 'experimentation'){
					self.main = false;
					self.experimentation = true;
				}

				else{
					self.main = false;
					self.performance = true;
				}
			},

			back: function(){
				var self = this;

				self.main = true;
				self.creativity = false;
				self.experimentation = false;
				self.performance = false;
			}
		};
	};

	return {
		restrict: 'A',
		templateUrl: 'views/_intro.html',
		replace: true,
		link: link
	};
});

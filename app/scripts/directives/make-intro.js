'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:makeIntro
 * @description
 * # makeIntro
 */
angular.module('giantSteps2App').directive('makeIntro', function () {

	var link = function($scope){

		var audioLib = {
  			squish: ["sine",0.0000,0.4000,0.0000,0.3120,0.0000,0.2040,20.0000,85.0000,1794.0000,0.5420,-0.9740,0.6270,0.0100,0.0003,0.0000,0.0000,0.0610,0.5000,0.0520,0.0000,0.0000,0.0000,0.7580,0.0000,0.3480,0.2230,0.0000],
  			out: ["sine",0.0000,0.4000,0.0000,0.3120,0.0000,0.2040,20.0000,20.0000,562.0000,0.5420,0.1580,0.6270,0.0100,0.0003,0.0000,0.0000,0.0610,0.5000,0.0520,0.0000,0.0000,0.0000,0.7580,0.0000,0.3480,0.2230,0.0000]
  		};

  		var samples = jsfxlib.createWaves(audioLib);
  		

		$scope.intro = {
			main: true,
			creativity: false,
			experimentation: false,
			performance: false,
			reverse: false,

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

				self.reverse = true;

				samples.squish.play();
			},

			back: function(){
				var self = this;

				samples.out.play();

				self.main = true;
				self.creativity = false;
				self.experimentation = false;
				self.performance = false;
				self.reverse = false;

				
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

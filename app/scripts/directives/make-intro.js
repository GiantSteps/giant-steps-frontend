'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:makeIntro
 * @description
 * # makeIntro
 */
angular.module('giantSteps2App').directive('makeIntro', function () {

	var link = function($scope, element, attrs){

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
		}


		// var intro = {
		// 	main: document.getElementById('total-msg'),
		// 	container: document.getElementById('main-container'),
		// 	imgContainer: document.getElementById('image-box'),

		// 	creativity: {
		// 		el: document.getElementById('creativity-msg'),
		// 		trigger: document.getElementById('creativity-trigger'),
		// 		img: 'http://www.giantsteps-project.eu/wp-content/uploads/2014/08/2-1024x682.jpg'
		// 	},
		// 	experimentation: {
		// 		el: document.getElementById('experimentation-msg'),
		// 		trigger: document.getElementById('experimentation-trigger'),
		// 		img: ''
		// 	},

		// 	performance: {
		// 		el: document.getElementById('performance-msg'),
		// 		trigger: document.getElementById('performance-trigger'),
		// 		img: ''
		// 	},

		// 	process: function(target){
		// 		console.log('hit');
		// 	},

		// 	showImage: function(img){
		// 		var self = this;

		// 		self.imgContainer.appendChild(img);

		// 	},

		// 	addImage: function(object){
		// 		var self = this;

		// 		var image = new Image();
		// 		image.onload = function(){
		// 			self.showImage(image);
		// 		};
		// 		image.src = object.img;
		// 	},

		// 	removeImage: function(){
		// 		var self = this;
		// 		self.imgContainer.innerHTML = '';
		// 	}
		// };

		// function process(){
		// 	console.log('yo');
		// }


		// // ------------------------------------------------
		// // Creativity toggles
		// //
		
		// intro.creativity.trigger.onclick = function(){
		// 	intro.main.style.display = 'none';
		// 	intro.creativity.el.style.display = 'block';
		// 	intro.addImage(intro.creativity);
		// };

		// intro.creativity.el.onclick = function(){
		// 	intro.main.style.display = 'block';
		// 	intro.creativity.el.style.display = 'none';
		// 	intro.removeImage();
		// };

		// // ------------------------------------------------
		// // Experimentation toggles
		// //

		// intro.experimentation.trigger.onclick = function(){
		// 	intro.main.style.display = 'none';
		// 	intro.experimentation.el.style.display = 'block';
			
		// };

		// intro.experimentation.el.onclick = function(){
		// 	intro.main.style.display = 'block';
		// 	intro.experimentation.el.style.display = 'none';
		// 	intro.removeImage(intro.main);
		// };

		// // ------------------------------------------------
		// // Performance toggles
		// //

		// intro.performance.trigger.onclick = function(){
		// 	intro.main.style.display = 'none';
		// 	intro.performance.el.style.display = 'block';
		// };

		// intro.performance.el.onclick = function(){
		// 	intro.main.style.display = 'block';
		// 	intro.performance.el.style.display = 'none';
		// }
		


		


  		

	};

	return {
		restrict: 'A',
		templateUrl: 'views/_intro.html',
		replace: true,
		link: link
	};
});

'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:addCanvas
 * @description
 * # addCanvas
 */
angular.module('giantSteps2App').directive('addCanvas', function () {

	return {
		restrict: 'A',
		link: function() {

			var width = window.innerWidth;
			var height = window.innerHeight;

			var parent = document.getElementById('canvas-container');
			var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0xffffff});

			parent.appendChild(renderer.view);

			var stage = new PIXI.Container();

			var texture = PIXI.Texture.fromImage('images/grid.png');

			var grid = new PIXI.Sprite(texture);

			// center the sprite's anchor point
			grid.anchor.x = 0.5;
			grid.anchor.y = 0.5;

			grid.scale.x = 0.5;
			grid.scale.y = 0.5;

			// move the sprite to the center of the screen
			grid.position.x = width / 2;
			grid.position.y = height / 2;

			stage.addChild(grid);

			// start animating
			animate();


			function animate() {
			    requestAnimationFrame(animate);

			    // just for fun, let's rotate mr rabbit a little
			    grid.rotation += 0.01;

			    // render the container
			    renderer.render(stage);
			}



			// function draw(){

			// 	// ------------------------------------------------
			// 	// Erase canvas
			// 	//
				
			// 	ctx.clearRect(0, 0, width, height);


			// 	// ------------------------------------------------
			// 	// Place dots horizontal
			// 	//
				
			// 	for (var hPos = 0; hPos < width; hPos += (padding + radius) + 1){
			// 		// ------------------------------------------------
			// 		// Vertical
			// 		//
					
			// 		for (var vPos = 0; vPos < height; vPos += (padding + radius) + 1){


			// 			ctx.fillStyle = '#000000';

			// 			// ------------------------------------------------
			// 			// One
			// 			//
						
			// 			ctx.beginPath();
			// 			ctx.arc(hPos + counter * 2, vPos + counter, radius, 0, (Math.PI / 180) * 360, false);
			// 			ctx.fill();
			// 			ctx.closePath();

			// 			// ------------------------------------------------
			// 			// Two
			// 			//
						
			// 			ctx.beginPath();
			// 			ctx.arc(hPos - counter, vPos - counter, radius, 0, (Math.PI / 180) * 360, false);
			// 			ctx.fill();
			// 			ctx.closePath();

			// 			// ------------------------------------------------
			// 			// Three
			// 			//
						
			// 			ctx.beginPath();
			// 			ctx.arc(hPos - counter * 1.3, vPos + counter, radius, 0, (Math.PI / 180) * 360, false);
			// 			ctx.fill();
			// 			ctx.closePath();

			// 			// ------------------------------------------------
			// 			// Four
			// 			//
	
			// 			ctx.beginPath();
			// 			ctx.arc(hPos + counter, vPos - counter, radius, 0, (Math.PI / 180) * 360, false);
			// 			ctx.fill();
			// 			ctx.closePath();
			// 		}
			// 	}


			// 	counter += 0.05;
			// 	if (counter >= halfWidth){
			// 		counter = 0;
			// 	}
			// }


			// // function onMouseMove(ev){
			// // 	x = ev.clientX / 2;
			// // 	y = ev.clientY / 2;
			// // 	draw();
			// // }

			// function render(){
			// 	draw();
			// 	requestAnimationFrame(render);
			// }

			// render();

			// document.addEventListener('mousemove', onMouseMove, false);
			


		}
	};
});

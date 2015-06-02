'use strict';

/*global PIXI:false, requestAnimationFrame */


/**
 * @ngdoc directive
 * @name giantSteps2App.directive:addCanvas
 * @description
 * # addCanvas
 */
angular.module('giantSteps2App').directive('addCanvas', function () {

	return {
		restrict: 'A',
		link: function(scope) {


			// ------------------------------------------------
			// Top level vars
			//
			
			var width = window.innerWidth;
			var height = window.innerHeight;
			var parent = document.getElementById('canvas-container');
			var canvas;

			var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0xffffff});
			
			var stage;
			var texture;
			var grid;
			var bulge;

			var mouseX = 0;
			var mouseY = 0;


			var images = [
				'images/grid.png',
				'images/grid2.png'
			];



			// ------------------------------------------------
			// Bulge Filter Shader
			//
			function BulgePinchFilter(){
				PIXI.filters.AbstractFilter.call(this,
					//vertex shader
					null,
					//frag shader
					[
						'precision mediump float;',
						'uniform float radius;',
						'uniform float strength;',
						'uniform vec2 center;',
						'uniform sampler2D uSampler;',
						'uniform vec4 dimensions;',
						'varying vec2 vTextureCoord;',

						'void main()',
						'{',
						'vec2 coord = vTextureCoord * dimensions.xy;',
						'coord -= center;',
						'float distance = length(coord);',
						'if (distance < radius) {',
						'float percent = distance / radius;',
						'if (strength > 0.0) {',
						'coord *= mix(1.0, smoothstep(0.0, radius /     distance, percent), strength * 0.75);',
						'} else {',
						'coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);',
						'}',
						'}',
						'coord += center;',
						'gl_FragColor = texture2D(uSampler, coord / dimensions.xy);',
						'vec2 clampedCoord = clamp(coord, vec2(0.0), dimensions.xy);',
						'if (coord != clampedCoord) {',
						'gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));',
						'}',
						'}'
					].join('\n'),

					//custom uniforms
					{
						dimensions: { type: '4f', value: [0,0,0,0] },
						radius: { type: '1f', value: 500 },
						strength: { type: '1f', value: 0.8 },
						center: { type: 'v2', value: {x: 150, y: 150} }

					}
				);
			}


			// ------------------------------------------------
			// Filter Setup
			//

			BulgePinchFilter.prototype = Object.create(PIXI.filters.AbstractFilter.prototype);
			BulgePinchFilter.prototype.constructor = BulgePinchFilter;


			// ------------------------------------------------
			// Filter methods
			//
			
			Object.defineProperty(BulgePinchFilter.prototype, 'radius', {
				get: function(){
					return this.uniforms.radius.value;
				},
				set: function(value){
					this.uniforms.radius.value = value;
				}
			});

			Object.defineProperty(BulgePinchFilter.prototype, 'strength', {
				get: function(){
					return this.uniforms.strength.value;
				},
				set: function(value){
					this.uniforms.strength.value = value;
				}
			});

			Object.defineProperty(BulgePinchFilter.prototype, 'center', {
				get: function(){
					return this.uniforms.center.value;
				},
				set: function(x, y){
					this.uniforms.center.value.x = x;
					this.uniforms.center.value.y = y;
				}
			});



			// ------------------------------------------------
			// Call filter
			//		
			bulge = new BulgePinchFilter();
			bulge.radius = 500;
			bulge.strength = 0.5;
			bulge.center.x = width / 2;
			bulge.center.y = height / 2;


			// ------------------------------------------------
			// Basic setup
			//
			
			function init(image){
				stage = new PIXI.Container();
				texture = PIXI.Texture.fromImage(image);
				grid = new PIXI.Sprite(texture);

				// center the sprite's anchor point
				grid.anchor.x = 0.5;
				grid.anchor.y = 0.5;

				grid.scale.x = 0.25;
				grid.scale.y = 0.25;

				// move the image to the center of the screen
				grid.position.x = width / 2;
				grid.position.y = height / 2;


				grid.filters = [bulge];

				stage.addChild(grid);
				parent.appendChild(renderer.view);
				renderer.view.setAttribute('id', 'bulge-canvas');
			}



			// ------------------------------------------------
			// Render Farm
			//
			
			function animate() {
				grid.rotation += 0.001;
				renderer.render(stage);

				bulge.center.x = mouseX;
				bulge.center.y = mouseY;

				requestAnimationFrame(animate);

				
			}



			// ------------------------------------------------
			// Mouse listener
			//
			
			function onMouseMove(event){
				mouseX = event.clientX;
				mouseY = event.clientY;
			}


			// ------------------------------------------------
			// Resize listener
			//

			function onWindowResize(){
				canvas = document.getElementById('bulge-canvas');

				canvas.style.height = window.innerHeight;
				canvas.style.width = window.innerWidth;

				renderer.view.style.width = window.innerWidth;
				renderer.view.style.height = window.innerHeight;

				grid.anchor.x = 0.5;
				grid.anchor.y = 0.5;


				renderer.resize(window.innerWidth, window.innerHeight);
			}
			



			// ------------------------------------------------
			// Mouse changes
			//
			document.body.addEventListener('mousemove', onMouseMove, false);
			window.addEventListener('resize', onWindowResize, false);


			// ------------------------------------------------
			// Yo
			//
			
			init(images[0]);
			animate();



			scope.swap1 = function(){
				init(images[1]);
			};
			
		


		}
	};
});

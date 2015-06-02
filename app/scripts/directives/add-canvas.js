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
		link: function() {

			var width = window.innerWidth;
			var height = window.innerHeight;
			var parent = document.getElementById('canvas-container');
			var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0xffffff});
			var stage = new PIXI.Container();
			var texture = PIXI.Texture.fromImage('images/grid.png');
			var grid = new PIXI.Sprite(texture);

			var mouseX = 0;
			var mouseY = 0;


			function onMouseMove(event){
				mouseX = event.clientX;
				mouseY = event.clientY;
			}
			


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
			// Call filters
			//


			var blurFilter = new PIXI.filters.BlurFilter();

			
			
			




			// ------------------------------------------------
			// Render Farm
			//
			
			function animate() {
				grid.rotation += 0.005;
				renderer.render(stage);

				bulge.center.x = mouseX;
				bulge.center.y = mouseY;

				requestAnimationFrame(animate);

				
			}

 
			var bulge = new BulgePinchFilter();
			
			bulge.radius = 500;
			bulge.strength = 0.5;
			
			// bulge.radius.set = 40;
			bulge.center.x = width / 2;
			bulge.center.y = height / 2;

			grid.filters = [bulge];

			// center the sprite's anchor point
			grid.anchor.x = 0.5;
			grid.anchor.y = 0.5;

			grid.scale.x = 0.5;
			grid.scale.y = 0.5;

			// move the sprite to the center of the screen
			grid.position.x = width / 2;
			grid.position.y = height / 2;

			stage.addChild(grid);
			parent.appendChild(renderer.view);

			// start animating
			animate();


			// ------------------------------------------------
			// Mouse changes
			//
			document.body.addEventListener('mousemove', onMouseMove, false);
			
		


		}
	};
});

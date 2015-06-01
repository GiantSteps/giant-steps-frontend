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
			    grid.rotation += 0.005;

			    // render the container
			    renderer.render(stage);
			}



			//strength between -1 and 1

// function BulgePinchFilter()
// {
//     PIXI.filters.AbstractFilter.call(this,
//         // vertex shader
//         null,
//         // fragment shader
//         [
//             'precision mediump float;',
//             'uniform float radius;',
//             'uniform float strength;',
//             'uniform vec2 center;',
//             'uniform sampler2D uSampler;',
//             'uniform vec4 dimensions;',
//             'varying vec2 vTextureCoord;',
            
//             'void main()',
//             '{',
//                 'vec2 coord = vTextureCoord * dimensions.xy;',
//                 'coord -= center;',
//                 'float distance = length(coord);',
//                 'if (distance < radius) {',
//                     'float percent = distance / radius;',
//                     'if (strength > 0.0) {',
//                         'coord *= mix(1.0, smoothstep(0.0, radius /     distance, percent), strength * 0.75);',
//                     '} else {',
//                         'coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);',
//                     '}',
//                 '}',
//                 'coord += center;',
//                 'gl_FragColor = texture2D(uSampler, coord / dimensions.xy);',
//                 'vec2 clampedCoord = clamp(coord, vec2(0.0), dimensions.xy);',
//                 'if (coord != clampedCoord) {',
//                     'gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));',
//                 '}',
//             '}'
//         ].join('\n'),
//         // custom uniforms
//         {
//             dimensions: { type: '4f', value: [0,0,0,0] },
//             radius: { type: '1f', value: 100 },
//             strength: { type: '1f', value: 0.8 },
//             center: { type: 'v2', value: {x: 150, y: 150} }
//         }
//     );
// };

// BulgePinchFilter.prototype = Object.create(PIXI.filters.AbstractFilter.prototype);
// BulgePinchFilter.prototype.constructor = BulgePinchFilter;

// Object.defineProperties(BulgePinchFilter.prototype, {
//     radius: {
//         get: function ()
//         {
//             return this.uniforms.radius.value;
//         },
//         set: function (value)
//         {
//             this.uniforms.radius.value = value;
//         }
//     },
//     strength: {
//         get: function ()
//         {
//             return this.uniforms.strength.value;
//         },
//         set: function (value)
//         {
//             this.uniforms.strength.value = value;
//         }
//     }
// });

// var renderer = PIXI.autoDetectRenderer(300, 300);
// document.body.appendChild(renderer.view);

// var stage = new PIXI.Container();
// stage.interactive = true;

// var bg = PIXI.Sprite.fromImage("http://i.imgur.com/NGr3yaz.jpg");
// bg.anchor.set(0.5);
// bg.position.x = bg.position.y = 0;

// var container = new PIXI.Container();
// container.position.x = renderer.width / 2;
// container.position.y = renderer.height / 2;

// var filter = new BulgePinchFilter();

// container.addChild(bg);
// stage.addChild(container);

// window.requestAnimFrame = function(){
//     return (
//         window.requestAnimationFrame       || 
//         window.webkitRequestAnimationFrame || 
//         window.mozRequestAnimationFrame    || 
//         window.oRequestAnimationFrame      || 
//         window.msRequestAnimationFrame     || 
//         function(callback){
//             window.setTimeout(callback, 1000 / 60);
//         }
//     );
// }();

// container.filters = [filter];

// function animate() {
//     renderer.render(stage);
//     requestAnimFrame(animate);
// }
// requestAnimFrame(animate);
			


		}
	};
});

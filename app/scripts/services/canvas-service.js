'use strict';

/* global PIXI:false, Modernizr:false */

/**
 * @ngdoc service
 * @name giantSteps2App.canvasService
 * @description
 * # canvasService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('canvasService', function () {

    
    // ------------------------------------------------
    // Top level vars
    //

      
      var width = window.innerWidth;
      var height = window.innerHeight;
      var parent = document.getElementById('canvas-container');
      var canvas;
      var renderer;
      var isDestroyed;

      var mobile = false;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        mobile = true;
      }


      if (Modernizr.webgl){
        renderer = new PIXI.WebGLRenderer(width, height,{backgroundColor : 0xffffff}, {antialias: true});
      }

      else{
        renderer = new PIXI.CanvasRenderer(width, height,{backgroundColor : 0xffffff}, {antialias: true});
      }

      
      
      var stage;
      var texture;
      var grid;
      var bulge;

      var mouseX = 0;
      var mouseY = 0;


      

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
      bulge.radius = 300;
      bulge.strength = 0.5;
      bulge.center.x = width / 2;
      bulge.center.y = height / 2;

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

      function onTouch(event){
        // event.preventDefault();

        for (var i = 0; i < event.touches.length; i++ ){
          mouseX = event.touches[i].pageX;
          mouseY = event.touches[i].pageY;
        }
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
      // Basic setup
      //
      
      function init(image){
        width = window.innerWidth;
        height = window.innerHeight;
        parent = document.getElementById('canvas-container');
        isDestroyed = false;

        renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0xffffff});

        mouseX = 0;
        mouseY = 0;



        stage = new PIXI.Container();
        texture = PIXI.Texture.fromImage(image);
        grid = new PIXI.Sprite(texture);

        // center the sprite's anchor point
        grid.anchor.x = 0.5;
        grid.anchor.y = 0.5;

        grid.scale.x = 0.5;
        grid.scale.y = 0.5;

        if (mobile){
          grid.scale.x = 0.25;
          grid.scale.y = 0.25;
        }

        // move the image to the center of the screen
        grid.position.x = width / 2;
        grid.position.y = height / 2;


        grid.filters = [bulge];

        stage.addChild(grid);
        parent.appendChild(renderer.view);
        renderer.view.setAttribute('id', 'bulge-canvas');


        // ------------------------------------------------
        // Listeners
        //
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('touchstart', onTouch, false);
        document.addEventListener('touchmove', onTouch, false);
        window.addEventListener('resize', onWindowResize, false);

        animate();
      }

      



      function destroy(){
        
        Object.keys(PIXI.utils.TextureCache).forEach(function(texture) {
          PIXI.utils.TextureCache[texture].destroy(true);
        });

        document.removeEventListener('mousemove', onMouseMove, false);
        document.removeEventListener('touchstart', onTouch, false);
        document.removeEventListener('touchmove', onTouch, false);
        window.removeEventListener('resize', onWindowResize, false);


      }


      

      return {
        init: function (image) {
          return init(image);
        },
        destroy: function(){
          return destroy();
        }
      };
    });

'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:topNav
 * @description
 * # topNav
 */
angular.module('giantSteps2App').directive('topNav', function (contentFarm) {

    var controller = function(){
        this.search = {
            input: '',
            showResults: false,
            criteria: [],

            getData: function(){
                var self = this;
                contentFarm.eventsIndex().then(function(response){
                    self.criteria = response;
                  });
              },

            toggleResults: function(){
                var self = this;
                self.showResults = !self.showResults;
              }
          };

        this.search.getData();

        this.toggleOpen = function(){
          alert('hi');
        };



      };

    return {
      templateUrl: 'views/_top-nav.html',
      restrict: 'EA',
      replace: true,
      controllerAs: 'topNavCtrl',
      controller: controller,
      link: function(scope, element, attrs){

        var openNav = document.getElementById('open-nav');
        var burger = document.getElementById('burger');


        scope.toggleOpen = function(ev){
          openNav.classList.add('open');
          burger.classList.add('opening');
        };
        
        if (attrs.color){
          var color = attrs.color;

          element.css({
            color: color
          });

          element.find('.nav-logo').css({
            background: 'url(images/logo-white.svg)'
          });

        }
      }
    };
  });

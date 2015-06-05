'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:topNav
 * @description
 * # topNav
 */
angular.module('giantSteps2App').directive('topNav', function ($state, contentFarm) {

    var controller = function(){
        this.search = {
            input: '',
            showResults: false,
            criteria: [],

            getData: function(){
                var self = this;
                contentFarm.eventsIndex().then(function(response){
                    for (var i = 0; i < response.length; i++ ){

                      response[i].type = 'event';

                      self.criteria.push(response[i]);
                    }

                    contentFarm.publicationsIndex().then(function(response){

                      for (var e = 0; e < response.length; e++ ){
                        response[e].type = 'download';

                        self.criteria.push(response[e]);
                      }
                    });



                  });
              },

            toggleResults: function(){
                var self = this;
                self.showResults = !self.showResults;
              }
          };

        // this.search.getData();

        this.go = function(type, slug){
          if (type === 'event'){
            $state.go('eventDetail', {eventId: slug});
          }
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

          element.find('.nav-burger').css({
            background: 'url(images/close.svg)'
          });

        }
      }
    };
  });

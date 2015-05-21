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

                    console.log(self.criteria);
                });
            },

            toggleResults: function(){
                var self = this;
                self.showResults = !self.showResults;
            }
        };

        this.search.getData();
    };

    return {
      templateUrl: 'views/_top-nav.html',
      restrict: 'EA',
      replace: true,
      controllerAs: 'topNavCtrl',
      controller: controller,
      link: function(scope, element, attrs){
        
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

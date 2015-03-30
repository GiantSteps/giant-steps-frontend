'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:topNav
 * @description
 * # topNav
 */
angular.module('giantSteps2App')
  .directive('topNav', function () {
    
    var controller = function(){
    	this.search = [
    		'yo'
    	];
    }

    return {
      templateUrl: 'views/_top-nav.html',
      restrict: 'EA',
      replace: true,
      controllerAs: 'topNavCtrl',
      controller: controller
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:navBar
 * @description
 * # navBar
 */
angular.module('giantSteps2App').directive('navBar', function ($rootScope, $state) {

  var controller = function(){
    this.navItems = [
      {
        name: 'About',
        state: 'about'
      },
      {
        name: 'Events',
        state: 'events'
      },
      {
        name: 'News',
        state: 'news'
      },
      {
        name: 'Project',
        state: 'project.objectives'
      },
      {
        name: 'Downloads',
        state: 'downloads.deliverables'
      },
      {
        name: 'Contact',
        state: 'contact'
      }


    ];


  };

  var link = function(scope, element, attrs){
    if (attrs.display === 'fixed'){
      element.addClass('stick');
    }
    if (attrs.color){
      element.addClass('white');
    }


    scope.open = false;


  };

  return {
    templateUrl: 'views/_navbar.html',
    restrict: 'AE',
    replace: true,
    controllerAs: 'navCtrl',
    controller: controller,
    link: link
  };
});

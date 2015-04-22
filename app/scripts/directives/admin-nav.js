'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:adminNav
 * @description
 * # adminNav
 */
angular.module('giantSteps2App').directive('adminNav', function () {

	var link = function(scope, element, attrs){

		scope.section = attrs.sectionName;

		scope.disabled = true;

		scope.submit = function(){
			console.log(scope.form);
		};

		scope.$on('validForm', function(){
			scope.disabled = false;
		});

		

		
	};


	return {
		templateUrl: 'views/_admin-nav.html',
		restrict: 'A',
		transclude: true,
		scope: {
			form: '=modelName'
		},
		link: link
	};
});

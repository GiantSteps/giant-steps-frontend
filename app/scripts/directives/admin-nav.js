'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:adminNav
 * @description
 * # adminNav
 */
angular.module('giantSteps2App').directive('adminNav', ['$state', 'eventService', function ($state, eventService) {

		var link = function(scope, element, attrs){

			scope.section = attrs.sectionName;

			scope.disabled = true;

			

			// -------------------------------------------------
			//
			// Enable button once all fields are in
			// 
			// -------------------------------------------------
			
			scope.$on('validForm', function(){
				scope.disabled = false;
			});


			// -------------------------------------------------
			//
			// Post form
			// 
			// -------------------------------------------------
			
			scope.submit = function(){
				eventService.postData(scope.form).then(function(response){
					
					// ------------------------------------------------
					// On valid entry, redirect back to event index page
					//
					$state.go('adminEvents');
					
				});
			};

			

			
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
	}
]);

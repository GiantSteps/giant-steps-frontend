'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsDetailCtrl
 * @description
 * # EventsDetailCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('EventsDetailCtrl', [
	'$scope',
	'$state',
	'$sce',
	'contentFarm',
	'markdownService',
	'canvasService',
	function ($scope, $state, $sce, contentFarm, markdownService, canvasService) {

		// ------------------------------------------------
		// Slug for specific event
		//
		
		var id = $state.params.eventId;

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();

		
		// ------------------------------------------------
		// Defaults
		//
		
		$scope.loading = true;
		$scope.event = {};


		// ------------------------------------------------
		// Get Data
		//
		
		contentFarm.eventsShow(id).then(function(response){
			$scope.event = response[0];


			// ------------------------------------------------
			// Parse markdown to HTML
			//
			
			markdownService.convert($scope.event.fields.text).then(function(response){
				$scope.event.fields.text = response;
				$scope.loading = false;

			});
			
		});


		// ------------------------------------------------
		// Turn on scope.trust
		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};
		

	}
]);

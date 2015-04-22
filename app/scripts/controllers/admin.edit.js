'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:AdminEditCtrl
 * @description
 * # AdminEditCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('AdminEditCtrl', [
	'$scope',
	'$state',
	'eventService',
	'uploadService',
	function ($scope, $state, eventService, uploadService) {

		console.log($state.params.eventId);

		var id = $state.params.eventId;

		// -------------------------------------------------
		//
		// Get specific event
		// 
		// -------------------------------------------------
		
		$scope.event = {};

		eventService.getSingleEvent(id).then(function(response){
			$scope.event = response;
			console.log(response);
		});



	}
]);

'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('EventsCtrl', [
	'$scope',
	'$state',
	'contentFarm',
	function ($scope, $state, contentFarm) {

		$scope.loading = true;
		$scope.events = [];
		// -------------------------------------------------
		//
		// Get events
		// 
		// -------------------------------------------------
		
		contentFarm.eventsIndex().then(function(response){
			$scope.events = response;
			$scope.loading = false;
		});


		// -------------------------------------------------
		//
		// Go to event
		// 
		// -------------------------------------------------
		$scope.goToEvent = function(id){
			$state.go('eventDetail', {'eventId': id});
		};


	}
]);

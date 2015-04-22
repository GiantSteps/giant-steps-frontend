'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('EventsCtrl', ['$scope', '$state', 'eventService', function ($scope, $state, eventService) {

	
	$scope.events = [];
	// -------------------------------------------------
	//
	// Get events
	// 
	// -------------------------------------------------
	
	eventService.getAllEvents().then(function(response){
		$scope.events = response;
	});


	// -------------------------------------------------
	//
	// Go to event
	// 
	// -------------------------------------------------
	$scope.goToEvent = function(id){
		$state.go('eventDetail', {'eventId': id});
	};


}]);

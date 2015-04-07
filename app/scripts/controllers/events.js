'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('EventsCtrl', ['$scope', 'eventService', function ($scope, eventService) {

	
	$scope.events = [];
	// -------------------------------------------------
	//
	// Get events
	// 
	// -------------------------------------------------
	
	eventService.getData().then(function(response){
		$scope.events = response;
	});


}]);

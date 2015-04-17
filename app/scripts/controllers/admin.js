'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('AdminCtrl', [
	'$scope',
	'eventService',
	function ($scope, eventService, $upload) {

	

		eventService.getData().then(function(data){
			$scope.events = data;
		});



		// -------------------------------------------------
		//
		// New event schema
		// 
		// -------------------------------------------------
	}
]);

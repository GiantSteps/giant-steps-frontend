'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the giantSteps2App
 */

/* global moment:false */

angular.module('giantSteps2App').controller('EventsCtrl', [
	'$scope',
	'$state',
	'contentFarm',
	'canvasService',
	function ($scope, $state, contentFarm, canvasService) {

		$scope.loading = true;
		$scope.futureEvents = [];
		$scope.pastEvents = [];
		$scope.showPast = false;

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();


		$scope.togglePast = function () {
			$scope.showPast = !$scope.showPast;
			return $scope.showPast;
		};


		var now = moment();

		// -------------------------------------------------
		//
		// Get events
		// 
		// -------------------------------------------------

		contentFarm.eventsIndex().then(function (response) {

			// ------------------------------------------------
			// turn all event dates into moments
			//
			var items = response.items;
			var assets = response.includes.Asset;


			for (var i = 0; i < items.length; i++) {
				items[i].fields.dateTime = moment(items[i].fields.dateTime);

				// see if there are any images
				if (items[i].fields.images && items[i].fields.images.length) {
					for (var x = 0; x < items[i].fields.images.length; x++) {
						var id = items[i].fields.images[x].sys.id;
						// find in assets
						var target = assets.find(a => a.sys.id === id);
						if (target) {
							items[i].fields.images[x].url = target.fields.file.url;
						}
					}
				}


				if (now > items[i].fields.dateTime) {
					items[i].fields.dateTime = new Date(moment(items[i].fields.dateTime));
					$scope.pastEvents.push(items[i]);
				}
				else {
					items[i].fields.dateTime = new Date(moment(items[i].fields.dateTime));
					$scope.futureEvents.push(items[i]);
				}
			}


			$scope.loading = false;
		});


		// -------------------------------------------------
		//
		// Go to event
		// 
		// -------------------------------------------------
		$scope.goToEvent = function (id) {
			$state.go('eventDetail', { 'eventId': id });
		};


	}
]);

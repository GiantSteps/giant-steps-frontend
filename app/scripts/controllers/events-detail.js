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
	'uiGmapGoogleMapApi',
	function ($scope, $state, $sce, contentFarm, markdownService, canvasService, uiGmapGoogleMapApi) {

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
		$scope.map = {};


		// ------------------------------------------------
		// Get Data
		//

		contentFarm.eventsShow(id).then(function (response) {
			$scope.event = response;
			console.log('RESPONSE', response);



			// ------------------------------------------------
			// Parse markdown to HTML
			//
			$scope.event.fields.text = markdownService.convert($scope.event.fields.text);
			$scope.loading = false;

			// ------------------------------------------------
			// If map exists
			//
			$scope.map = null;

			if ($scope.event.fields.map) {
				$scope.map = {
					center: {
						latitude: $scope.event.fields.map.lat,
						longitude: $scope.event.fields.map.lon
					},
					zoom: 15
				};

				$scope.options = {
					scrollwheel: false
				};

				$scope.marker = {
					id: 0,
					coords: {
						latitude: $scope.map.center.latitude,
						longitude: $scope.map.center.longitude
					},
					options: {
						draggable: false
					}
				};

				// ------------------------------------------------
				// Setup maps once data from contentful is in. IF it exists
				//
				if ($scope.event.fields.map.lat) {
					uiGmapGoogleMapApi.then(function () {
						console.log('Maps up');
					});
				}
			}
		});


		// ------------------------------------------------
		// Turn on scope.trust
		$scope.trust = function (text) {
			return $sce.trustAsHtml(text);
		};
	}
]);

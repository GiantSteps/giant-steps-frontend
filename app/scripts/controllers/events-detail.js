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
	function ($scope, $state, $sce, contentFarm, markdownService) {

		var id = $state.params.eventId;

		$scope.loading = true;


		$scope.event = {};


		contentFarm.eventsShow(id).then(function(response){
			$scope.event = response[0];


			markdownService.convert($scope.event.fields.text).then(function(response){
				// $scope.event.fields.content[i].fields.body = response;

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

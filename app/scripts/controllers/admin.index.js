'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:AdminIndexCtrl
 * @description
 * # AdminIndexCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('AdminIndexCtrl', [
	'$scope',
	'eventService',
	function ($scope, eventService) {

		$scope.events = {};


		// -------------------------------------------------
		//
		// Get all events
		// 
		// -------------------------------------------------
		
		eventService.getData().then(function(data){
			$scope.events = data;
		});





		// -------------------------------------------------
		//
		// Delete
		// 
		// -------------------------------------------------
		
		$scope.destroy = function(id){

			//show alert
			var value = confirm('Are you sure?');

			if (value === true){
				eventService.destroy(id).then(function(response){
					
					// ------------------------------------------------
					// On delete, remove item from array of events
					//
					var position = _.findIndex($scope.events, {'_id': response._id});

					if (position > -1){
						$scope.events.splice(position, 1);
					}
					
				});
			}
			else{
				return;
			}
		};


	}
]);

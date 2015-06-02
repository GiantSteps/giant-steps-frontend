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
	function ($scope, $state, contentFarm) {

		$scope.loading = true;
		$scope.futureEvents = [];
		$scope.pastEvents = [];
		$scope.showPast = false;


		$scope.togglePast = function(){
			$scope.showPast = !$scope.showPast;
			return $scope.showPast;
		};


		var now = moment();


		console.log(now);
		// -------------------------------------------------
		//
		// Get events
		// 
		// -------------------------------------------------
		
		contentFarm.eventsIndex().then(function(response){

			// ------------------------------------------------
			// turn all event dates into moments
			//

			for (var i = 0; i < response.length; i++ ){
				response[i].fields.dateTime = moment(response[i].fields.dateTime);


				if (now > response[i].fields.dateTime){
					response[i].fields.dateTime = new Date(moment(response[i].fields.dateTime));
					$scope.pastEvents.push(response[i]);
				}
				else{
					response[i].fields.dateTime = new Date(moment(response[i].fields.dateTime));
					$scope.futureEvents.push(response[i]);
				}
			}

			
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

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
	'$location',
	'$rootScope',
	'eventService',
	'$upload',
	'uploadService',
	function ($scope, $location, $rootScope, eventService, $upload, uploadService) {

		$scope.newEvent = {};
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
		// Images
		// 
		// -------------------------------------------------
		$scope.imageUploads = [];
		$scope.image = {};


		



		// -------------------------------------------------
		//
		// New event schema
		// 
		// -------------------------------------------------

		$scope.$watch('newEvent.file', function(){
			upload($scope.newEvent.file);
		});




		// -------------------------------------------------
		//
		// Watch for when form is valid
		// 
		// -------------------------------------------------
		
		$scope.$watch(function(){
			if ($scope.newEventForm){
				return $scope.newEventForm.$valid && $scope.newEventForm.$dirty;
			}
			
		
		}, function(validity){
			$scope.$broadcast('validForm', validity);
		});




		// -------------------------------------------------
		//
		// File upload function
		// 
		// -------------------------------------------------
		
		var upload = function(file){
			if (file){
				file = file[0];
				$scope.file = file;
				$scope.upload = [];

				file.progress = parseInt(0, 10);

				// ------------------------------------------------
				// First, get signature
				//
				
				uploadService.getPolicy(file).then(function(response){
					console.log(response);
					// ------------------------------------------------
					// Take signature and use for upload
					//
					var awsParams = response;

					uploadService.upload(file, awsParams).then(function(response){
						
						//save image to current form model
						$scope.newEvent.image = response.postresponse.location;

						//use for preview
						$scope.image.url = response.postresponse.location;
					});
					
				});

			}
			
		};


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


		

		// ------------------------------------------------
		// Populate Fields with saved entry
		//
		
		$scope.newEvent.teaser = 'Yo';

	}
]);

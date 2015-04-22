'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:AdminNewCtrl
 * @description
 * # AdminNewCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('AdminNewCtrl', [
	'$scope',
	'eventService',
	'uploadService',
	function ($scope, eventService, uploadService) {



		$scope.newEvent = {};

		// -------------------------------------------------
		//
		// Images
		// 
		// -------------------------------------------------
		$scope.imageUploads = [];
		$scope.image = {};


		// -------------------------------------------------
		//
		// Watch for file upload, and pass to aws once selected
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
		// File Uploads
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


		// ------------------------------------------------
		// Populate Fields with saved entry
		//
		
		$scope.newEvent.teaser = 'Yo';



	}
]);

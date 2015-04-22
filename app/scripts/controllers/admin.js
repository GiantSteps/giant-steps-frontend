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

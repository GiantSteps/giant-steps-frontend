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

		$scope.newEvent = {};

		eventService.getData().then(function(data){
			$scope.events = data;
		});



		// -------------------------------------------------
		//
		// New event schema
		// 
		// -------------------------------------------------

		$scope.$watch('newEvent.file', function(){
			$scope.upload($scope.newEvent.file);
			console.log('change');
		});

		// ------------------------------------------------
		// Populate Fields with saved entry
		//
		
		$scope.newEvent.teaser = 'Yo';

		$scope.upload = function(file){
			if (file && file.length){
				$upload.upload({
					url: '*',
					fields: {
						'username': 'Admin'
					},
					file: file
				}).progress(function(evt){
					var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
					console.log('Progress: ' + progressPercentage + '% ' + evt.file.name);

				}).success(function(data, status, headers, config){
					console.log('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
				});
			}
		};
	}
]);

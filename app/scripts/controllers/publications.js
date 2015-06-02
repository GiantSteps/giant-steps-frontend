'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:PublicationsCtrl
 * @description
 * # PublicationsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('PublicationsCtrl', [
	'$scope',
	'contentFarm',
	'canvasService',
	function ($scope, contentFarm, canvasService) {

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();
		

		$scope.downloads2015 = [];
		$scope.downloads2014 = [];

		$scope.loading = true;

		contentFarm.downloadsIndex().then(function(response){

			console.log(response);

			for (var i = 0; i < response.length; i++ ){
				if (response[i].fields.yearPublished === '2015'){
					$scope.downloads2015.push(response[i]);
				}

				else if (response[i].fields.yearPublished === '2014'){
					$scope.downloads2014.push(response[i]);
				}
			}
			$scope.loading = false;
		});

	}
]);

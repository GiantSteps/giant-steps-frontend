'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('AboutCtrl', [
	'$scope',
	'$sce',
	'contentFarm',
	'markdownService',
	'canvasService',
	function ($scope, $sce, contentFarm, markdownService, canvasService) {


		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();
		

		$scope.about = '';
		$scope.loading = true;

		contentFarm.textIndex().then(function(response){
			// ------------------------------------------------
			// Convert markdown for about text
			//


			markdownService.convert(response[0].fields.about).then(function (response){


				$scope.about = response;
				$scope.loading = false;
			});
			
		});

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};

	}
]);

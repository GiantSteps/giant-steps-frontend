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
	function ($scope, $sce, contentFarm, markdownService) {

		$scope.about = '';

		contentFarm.textIndex().then(function(response){
			// ------------------------------------------------
			// Convert markdown for about text
			//


			markdownService.convert(response[0].fields.about).then(function (response){


				$scope.about = response;
			});
			
		});

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};

	}
]);

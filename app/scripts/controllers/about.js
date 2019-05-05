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
	'canvasService',
	function ($scope, canvasService) {


		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();


		// ------------------------------------------------
		// Defaults
		//

		$scope.about = '';

	}
]);

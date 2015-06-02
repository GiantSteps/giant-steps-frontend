'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('MainCtrl', function ($scope, canvasService) {
	



	var images = [
		'images/grid.png',
		'images/grid2.png',
		'images/patterns8.png'
	];

	canvasService.init(images[0]);



});

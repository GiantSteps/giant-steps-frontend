'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('EventsCtrl', function ($scope) {

	$scope.calendar = [
		{
			title: 'CHI2015 Workshop: Collaborating with Intelligent Machines: Interfaces for Creative Sound',
			posted: Date.now(),
			author: 'admin',
			date: ''

		}


	];


});

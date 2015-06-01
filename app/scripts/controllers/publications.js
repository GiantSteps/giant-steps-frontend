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
	function ($scope, contentFarm) {

		$scope.downloads = [];

		$scope.loading = true;

		contentFarm.downloadsIndex().then(function(response){
			console.log(response);
			$scope.loading = false;
		});

	}
]);

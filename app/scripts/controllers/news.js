'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('NewsCtrl', function ($scope, $state, canvasService, contentFarm) {


	$scope.loading = true;
	$scope.futureEvents = [];
	$scope.pastEvents = [];
	$scope.showPast = false;

	// ------------------------------------------------
	// Make sure GL is cleaned up
	//
	canvasService.destroy();




	// -------------------------------------------------
	//
	// Get news
	// 
	// -------------------------------------------------

	contentFarm.newsIndex().then(function (response) {

		var items = response.items;
		var assets = response.includes.Asset;

		for (var i = 0; i < items.length; i++) {
			// see if there are any images
			if (items[i].fields.images && items[i].fields.images.length) {
				for (var x = 0; x < items[i].fields.images.length; x++) {
					var id = items[i].fields.images[x].sys.id;
					// find in assets
					var target = assets.find(a => a.sys.id === id);
					if (target) {
						console.log('target', target);
						items[i].fields.images[x].url = target.fields.file.url;
					}
				}
			}
		}

		$scope.news = items;

		$scope.loading = false;
	});


	// -------------------------------------------------
	//
	// Go to event
	// 
	// -------------------------------------------------
	$scope.goToItem = function (id) {
		$state.go('newsDetail', { 'newsId': id });
	};

});

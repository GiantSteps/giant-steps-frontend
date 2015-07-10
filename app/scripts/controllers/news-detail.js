'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:NewsDetailCtrl
 * @description
 * # NewsDetailCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('NewsDetailCtrl', function ($scope, $state, $sce, contentFarm, markdownService, canvasService) {

	// ------------------------------------------------
	// Slug for specific item
	//
	
	var id = $state.params.newsId;

	// ------------------------------------------------
	// Make sure GL is cleaned up
	//
	canvasService.destroy();

	// ------------------------------------------------
	// Defaults
	//
	
	$scope.loading = true;
	$scope.news = {};


	// ------------------------------------------------
	// Get Data
	//
	
	contentFarm.newsShow(id).then(function(response){
		$scope.news = response[0];
		console.log($scope.news);



		// ------------------------------------------------
		// Parse markdown to HTML
		//
		$scope.news.fields.bodyText = markdownService.convert($scope.news.fields.bodyText);
		$scope.loading = false;
		
	});




	// ------------------------------------------------
	// Turn on scope.trust
	$scope.trust = function(text){
		return $sce.trustAsHtml(text);
	};


});

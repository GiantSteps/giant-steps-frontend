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
	
	contentFarm.newsIndex().then(function(response){

		$scope.news = response;


		
		$scope.loading = false;
	});


	// -------------------------------------------------
	//
	// Go to event
	// 
	// -------------------------------------------------
	$scope.goToItem = function(id){
		$state.go('newsDetail', {'newsId': id});
	};

});

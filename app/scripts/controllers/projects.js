'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('ProjectsCtrl', [
	'$scope',
	'$sce',
	'contentFarm',
	'markdownService',
	function ($scope, $sce, contentFarm, markdownService) {

		$scope.projects = {};

		$scope.loading = true;

		contentFarm.textIndex().then(function(response){
			// ------------------------------------------------
			// Convert markdown for about text
			//
			$scope.projects = response[0];
			console.log($scope.projects);


			markdownService.convert($scope.projects.fields.consortium).then(function (response){
				$scope.projects.fields.consortium = response;

				markdownService.convert($scope.projects.fields.projectObjectives).then(function (response){
					$scope.projects.fields.projectObjectives = response;

					markdownService.convert($scope.projects.fields.workPlan).then(function (response){
						$scope.projects.fields.workPlan = response;
						$scope.loading = false;
					});
				});
			});
			
		});

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};

	}
]);

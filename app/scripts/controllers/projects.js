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
	'$state',
	'contentFarm',
	'markdownService',
	'canvasService',
	function ($scope, $sce, $state, contentFarm, markdownService, canvasService) {

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();

		$scope.objectives = {};
		$scope.workplan = {};
		$scope.consortium = {};
		$scope.imprint = 'Coming Soon.';



		$scope.projects = {};
		$scope.objActive = true;
		$scope.workActive = false;
		$scope.consortActive = false;
		$scope.imprintActive = false;

		$scope.loading = true;

		contentFarm.textIndex().then(function(response){
			// ------------------------------------------------
			// Convert markdown for about text
			//
			$scope.projects = response[0];


			markdownService.convert($scope.projects.fields.consortium).then(function (response){
				$scope.consortium = response;

				markdownService.convert($scope.projects.fields.projectObjectives).then(function (response){
					$scope.objectives = response;

					markdownService.convert($scope.projects.fields.workPlan).then(function (response){
						$scope.workplan = response;

						markdownService.convert($scope.projects.fields.imprint).then(function(response){
							$scope.imprint = response;

							$scope.loading = false;

							$scope.current = $scope.projects.fields.projectObjectives;
						});
						
					});

				});
			});
			
		});

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};

		



		$scope.switch = function(topic){
			
			$scope.objActive = false;
			$scope.workActive = false;
			$scope.consortActive = false;
			$scope.imprintActive = false;



			if (topic === 'objectives'){
				$scope.objActive = true;
				$state.go('project.objectives');
			}
			else if (topic === 'workplan'){
				$scope.workActive = true;
				$state.go('project.workplan');
			}

			else if (topic === 'consortium'){
				$scope.consortActive = true;
				$state.go('project.consortium');
			}

			else if (topic === 'imprint'){
				$scope.imprintActive = true;
				$state.go('project.imprint');
			}
		};

	}
]);

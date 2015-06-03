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
	'$sce',
	'contentFarm',
	'canvasService',
	'markdownService',
	function ($scope, $sce, contentFarm, canvasService, markdownService) {

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();

		$scope.loading = true;
		

		$scope.downloads2015 = [];
		$scope.downloads2014 = [];
		$scope.statics = {};
		$scope.deliverables = {};
		$scope.publications = {};
		$scope.dataSets = 'Coming Soon.';

		// ------------------------------------------------
		// Section Defaults
		//
		
		$scope.deliverablesActive = true;
		$scope.publicationsActive = false;
		$scope.softwareActive = false;
		$scope.dataActive = false;



		// ------------------------------------------------
		// Get publications
		//
		
		contentFarm.publicationsIndex().then(function(response){

			$scope.publications = response;


			// ------------------------------------------------
			// Get deliverables
			//
			contentFarm.deliverablesIndex().then(function(response){
				$scope.deliverables = response;

				// ------------------------------------------------
				// Get static GH repos
				//
				contentFarm.textIndex().then(function(response){
					$scope.statics = response[0];

					markdownService.convert($scope.statics.fields.software).then(function(response){
						$scope.statics.fields.software = response;
					});
					$scope.loading = false;
					
				});
				
			});
			
		});



		$scope.switch = function(topic){
			
			$scope.deliverablesActive = false;
			$scope.publicationsActive = false;
			$scope.softwareActive = false;
			$scope.dataActive = false;

			if (topic === 'deliverables'){
				$scope.deliverablesActive = true;
				$scope.current = $scope.deliverables;
			}
			else if (topic === 'publications'){
				$scope.publicationsActive = true;
				$scope.current = $scope.publications;
			}

			else if (topic === 'software'){
				$scope.softwareActive = true;
				$scope.current = $scope.statics.fields.software;
			}

			else if (topic === 'data'){
				$scope.dataActive = true;
				$scope.current = $scope.dataSets;
			}
		};

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};

	}
]);

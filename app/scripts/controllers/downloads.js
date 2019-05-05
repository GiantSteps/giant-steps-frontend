'use strict';

/**
 * @ngdoc function
 * @name giantSteps2App.controller:PublicationsCtrl
 * @description
 * # PublicationsCtrl
 * Controller of the giantSteps2App
 */
angular.module('giantSteps2App').controller('DownloadsCtrl', [
	'$scope',
	'$sce',
	'$state',
	'contentFarm',
	'canvasService',
	'markdownService',
	function ($scope, $sce, $state, contentFarm, canvasService, markdownService) {

		// ------------------------------------------------
		// Make sure GL is cleaned up
		//
		canvasService.destroy();



		$scope.loading = true;


		$scope.softwares = {};
		$scope.deliverables = {};
		$scope.publications = {};
		$scope.dataSets = {};
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

		contentFarm.publicationsIndex().then(function (response) {

			$scope.publications = response;


			// ------------------------------------------------
			// Get deliverables
			//
			contentFarm.deliverablesIndex().then(function (response) {
				$scope.deliverables = response;

				// ------------------------------------------------
				// Get static GH repos
				//
				contentFarm.softwareIndex().then(function (response) {

					$scope.softwares = response;

					for (var i = 0; i < $scope.softwares.length; i++) {
						$scope.softwares[i].fields.text = markdownService.convert($scope.softwares[i].fields.text);
					}

					contentFarm.dataSetsIndex().then(function (response) {

						$scope.dataSets = response;

						for (var i = 0; i < $scope.dataSets.length; i++) {

							$scope.dataSets[i].fields.text = markdownService.convert($scope.dataSets[i].fields.text);
						}

						$scope.loading = false;
					});
				});

			});

		});



		$scope.switch = function (topic) {

			$scope.deliverablesActive = false;
			$scope.publicationsActive = false;
			$scope.softwareActive = false;
			$scope.dataActive = false;



			if (topic === 'deliverables') {
				$scope.deliverablesActive = true;
				$state.go('downloads.deliverables');
			}
			else if (topic === 'publications') {
				$scope.publicationsActive = true;
				$state.go('downloads.publications');
			}

			else if (topic === 'software') {
				$scope.softwareActive = true;
				$state.go('downloads.software');
			}

			else if (topic === 'data') {
				$scope.dataActive = true;
				$state.go('downloads.data');
			}
		};

		$scope.trust = function (text) {
			return $sce.trustAsHtml(text);
		};

	}
]);

'use strict';

/**
 * @ngdoc directive
 * @name giantSteps2App.directive:modifyCols
 * @description
 * # modifyCols
 */
angular.module('giantSteps2App').directive('modifyCols', function () {

	var link = function($scope, element){
		element.find('.project-col').each(function(){
			$(this).resizable();
			$(this).draggable({
				stack: '.project-col'
			});
		});
	}


	return {
		restrict: 'A',
		link: link
	};
});

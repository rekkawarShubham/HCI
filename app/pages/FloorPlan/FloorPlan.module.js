(function () {
	'use strict';

	angular.module('BlurAdmin.pages.FloorPlan', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('FloorPlan', {
				url: '/FloorPlan',
				controller: 'FloorPlanPageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/FloorPlan/FloorPlan.html',
				title: 'FloorPlan',
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['admin'] // <-- roles allowed for this module
				}
			});
	}
})();
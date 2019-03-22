(function () {
	'use strict';

	angular.module('BlurAdmin.pages.ViewGrievance', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('ViewGrievance', {
				url: '/ViewGrievance',
				controller: 'ViewGrievancePageCtrl',
				templateUrl: 'app/pages/ViewGrievance/ViewGrievance.html',
				title: 'View Grievance',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['admin'] // <-- roles allowed for this module
				}

			});
	}
})();
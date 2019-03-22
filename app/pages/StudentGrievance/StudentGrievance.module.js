(function () {
	'use strict';

	angular.module('BlurAdmin.pages.StudentGrievance', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('StudentGrievance', {
				url: '/StudentGrievance',
				controller: 'StudentGrievancePageCtrl',
				controllerAs: 'vm',
				templateUrl: 'app/pages/StudentGrievance/StudentGrievance.html',
				title: 'Fill Grievance',
				sidebarMeta: {
					icon: 'ion-gear-a',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});
	}
})();
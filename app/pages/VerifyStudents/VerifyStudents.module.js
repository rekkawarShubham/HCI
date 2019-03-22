(function () {
	'use strict';

	angular.module('BlurAdmin.pages.VerifyStudents', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('VerifyStudents', {
				url: '/VerifyStudents',
				controller: 'VerifyStudentsPageCtrl',
				templateUrl: 'app/pages/VerifyStudents/VerifyStudents.html',
				title: 'Verify Students',
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
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.ApproveMisAccess', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('ApproveMisAccess', {
				url: '/ApproveMisAccess',
				controller: 'ApproveMisAccessPageCtrl',
				templateUrl: 'app/pages/ApproveMisAccess/ApproveMisAccess.html',
				title: 'Approve Mis Access',
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
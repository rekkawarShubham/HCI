(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Approve', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Approve', {
				url: '/Approve',
				controller: 'ApprovePageCtrl',
				templateUrl: 'app/pages/Approve/Approve.html',
				title: 'Approve',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['investor'] // <-- roles allowed for this module
				}

			});
	}
})();
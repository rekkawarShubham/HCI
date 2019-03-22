(function () {
	'use strict';

	angular.module('BlurAdmin.pages.ApproveFund', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('ApproveFund', {
				url: '/ApproveFund',
				controller: 'ApproveFundPageCtrl',
				templateUrl: 'app/pages/ApproveFund/ApproveFund.html',
				title: 'ApproveFund',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['sidbiofficer'] // <-- roles allowed for this module
				}

			});
	}
})();
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Apply', ['ngFileUpload'])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Apply', {
				url: '/Apply',
				controller: 'ApplyPageCtrl',
				templateUrl: 'app/pages/Apply/Apply.html',
				title: 'Apply',
				sidebarMeta: {
					icon: 'ion-ios-folder',
					order: 800,
				},
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['startup'] // <-- roles allowed for this module
				}

			});
	}
})();
(function () {
	'use strict';

	angular.module('BlurAdmin.pages.Test', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('Test', {
				url: '/Test',
				controller: 'TestPageCtrl',
				templateUrl: 'app/pages/Test/Test.html',
				title: 'Test',
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
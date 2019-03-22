(function () {
	'use strict';

	angular.module('BlurAdmin.pages.PastReserve', [])
		.config(routeconfig);
	/** @ngInject */
	function routeconfig($stateProvider) {
		$stateProvider
			.state('PastReserve', {
				url: '/PastReserve',
				controller: 'PastReservePageCtrl',
				templateUrl: 'app/pages/PastReserve/PastReserve.html',
				title: 'Past Bookings',
				authenticate: true,
				params: { // <-- focusing this one
					authRoles: ['student'] // <-- roles allowed for this module
				}

			});

	}
})();